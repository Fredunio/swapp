/* eslint-disable @typescript-eslint/no-unused-vars */
import type { LoaderFunctionArgs } from "@remix-run/node";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getAuth } from "@clerk/remix/ssr.server";
import { useForm, UseFormReturnType } from "@mantine/form";
import {
  ActionFunctionArgs,
  NodeOnDiskFile,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from "@remix-run/node";
import {
  Form,
  json,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { useState } from "react";
import { AddSwapFormStepOne } from "~/components/Forms/AddSwap/AddSwapFormStepOne";
import { AddSwapFormStepTwo } from "~/components/Forms/AddSwap/AddSwapFormStepTwo";
import { FormButtons } from "~/components/Forms/FormButtons/FormButtons";

import { AdminSdk, getSdkWithToken } from "~/lib/api.server";
import { clerkClient } from "~/lib/clerkClient.server";
import { ServerS3Client } from "~/lib/s3/client.server";
import { TFormNewItem, TFormNewSwapTransaction } from "~/lib/types";
import { generateImageName, isNodeFile, isNodeFileArray } from "~/lib/utils";
import { Box } from "@mantine/core";
import { acceptedImagesTypes } from "~/lib/constants";
import { notifications } from "@mantine/notifications";
import {
  Item_Insert_Input,
  Transaction_Insert_Input,
} from "~/graphql/generated";

const initialDescription =
  '<h2 style="text-align: center;">Describe your item...</h2><p>Here You can provide a detailed description of your item. Include any relevant information that will help others understand what you are offering.</p>';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const GEOAPIFY_API_KEY = process.env.GEOAPIFY_API_KEY;

  if (!GEOAPIFY_API_KEY) {
    throw new Error("GEOAPIFY_API_KEY is not defined");
  }

  const sdk = AdminSdk;
  const itemFormData = await sdk.GetItemFormData();
  const currencyData = await sdk.GetCurrencies();
  if (!itemFormData || !currencyData) {
    throw new Error("Failed to fetch data");
  }

  return json({ itemFormData, GEOAPIFY_API_KEY, currencyData });
};

export async function action({ request, params, context }: ActionFunctionArgs) {
  const { sessionId, userId } = await getAuth({ request, params, context });
  if (!sessionId || !userId) {
    return redirect("/login");
  }

  // let errorMessage: string | undefined = undefined;

  const template = "swapp";
  const { jwt: jwtToken } = await clerkClient.sessions.getToken(
    sessionId,
    template
  );

  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5_000_000,
      file: ({ filename }) => {
        console.log("filename: ", filename);
        return filename;
      },
    }),
    // parse everything else into memory
    unstable_createMemoryUploadHandler()
  );

  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  console.log("formData: ", formData);
  const images = formData.getAll("images");
  console.log("images: ", images);
  console.log("typeof images: ", typeof images);

  // Check if images are provided and are valid - only for the main item
  if (!images || !Array.isArray(images) || images.length === 0) {
    return { status: 400, json: { error: "No images provided" } };
  }
  if (isNodeFileArray(images)) {
    return { status: 400, json: { error: "Invalid image file" } };
  }

  const sdk = getSdkWithToken(jwtToken);
  console.log("formData: ", formData);

  const bucketName = process.env.S3_BUCKET_NAME_ITEM_IMAGES;
  if (!bucketName) {
    console.error("S3_BUCKET_NAME_ITEM_IMAGES is not defined");
    return { status: 500, json: { error: "Internal server error" } };
  }
  return { status: 200, json: { success: true } };

  const imageNames: string[] = [];
  for (const imageFile of images as unknown as NodeOnDiskFile[]) {
    // Generate a random name for the image and add the extension from MIME type
    const newImageName = generateImageName(imageFile.type);

    const imageBlob = new Blob([imageFile]);
    const imageArrayBuffer = await imageBlob.arrayBuffer();
    const imageBuffer = Buffer.from(imageArrayBuffer);

    // Upload the image to S3
    try {
      await ServerS3Client.send(
        new PutObjectCommand({
          Bucket: bucketName,
          Key: newImageName,
          // TODO: fix uploading the image
          // The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-l an Array-like Object. Received an instance of File
          Body: imageBuffer,
          ContentType: imageFile.type,
        })
      );
    } catch (error) {
      console.error("Error uploading image to S3: ", error);
    }

    imageNames.push(newImageName);
  }

  const itemData: Item_Insert_Input = {
    name: formData.get("name")?.toString(),
    categoryId: Number(formData.get("category")),
    subcategoryId: Number(formData.get("subcategory")),
    description: formData.get("description")?.toString() || null,
    condition: Number(formData.get("condition")) || null,
    mainColorId: Number(formData.get("mainColor")),
    quickInfo: formData.get("quickInfo")?.toString() || null,
    shippingFromCountry: Number(formData.get("shippingFromCountry")),
    shippingFromCity: Number(formData.get("shippingFromCity")),
    // tags: formData.getAll("tags").map((tag) => tag as string),
    brand: Number(formData.get("brand")) || null,
    manufacturerDate: formData.get("manufacturerDate") || null,
    sizeId: Number(formData.get("size")) || null,
    model: formData.get("model")?.toString() || null,
    private: formData.get("private") === "true" ? true : false,
    shippingFromState: Number(formData.get("shippingFromState")) || null,
    userId: userId,
    ItemTags: {
      // TODO: change it
      data: [{ itemId: 1, tagId: 1 }],
    },
    images: imageNames,
  };

  const wantedItems = formData.getAll("wantedItems");
  console.log("wantedItems: ", wantedItems);

  const transactionData: Transaction_Insert_Input = {
    // WantedItemTransactions: [],
    availableUntil: formData.get("availableUntil")?.toString() || null,
    currencyId: Number(formData.get("currency")),
    extraPayMaxAmount: formData.get("extraPayMaxAmount") || null,
    extraReceiveMaxAmount: formData.get("extraReceiveMaxAmount") || null,
    offeredItemId: 1,
    seekingItemId: 1,
    swapForAnyItem:
      formData.get("willSwapForAnyItem") === "true" ? true : false,
    transactionTypeId: 1, // Swap - from the database
    userId: userId,
    willPayExtra: formData.get("willPayExtra") === "true" ? true : false,
    willReceiveExtra:
      formData.get("willReceiveExtra") === "true" ? true : false,
  };
}

export default function AddSwapPage() {
  const navigation = useNavigation();

  const stepOneForm = useForm<TFormNewItem>({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      categoryId: "",
      subcategoryId: "",
      images: undefined,
      tags: [],
      manufacturer: undefined,
      model: undefined,
      manufacturyDate: undefined,
      description: initialDescription,
      conditionId: "",
      mainColorId: undefined,
      brand: undefined,
      sizeId: undefined,
      madeInCountryId: undefined,
      quickInfo: "",
      shippingFromCountryId: undefined,
      shippingFromCityId: undefined,
    },

    // validate: {
    //   name: (value) => {
    //     if (!value) return "Name is required";
    //     return value.length < 3 ? "Name is too short" : null;
    //   },
    //   categoryId: (value) => {
    //     if (!value) return "Category is required";
    //   },
    //   subcategoryId: (value) => {
    //     if (!value) return "Subcategory is required";
    //   },

    //   conditionId: (value) => {
    //     if (!value) return "Condition is required";
    //   },

    //   images: (value) => {
    //     if (!value || value.length === 0)
    //       return "At least one image is required";
    //     return null;
    //   },

    //   shippingFromCountryId(value) {
    //     if (!value) return "Country is required";
    //   },
    //   shippingFromCityId(value) {
    //     if (!value) return "City is required";
    //   },

    //   quickInfo: (value) => {
    //     if (!value) return "Please provide a quick info";
    //     return value.length < 3 ? "Quick info is too short" : null;
    //   },
    // },
  });
  const stepTwoForm = useForm<TFormNewSwapTransaction>({
    mode: "uncontrolled",
    initialValues: {
      wantedItems: [],
      shippingFromSameCountry: true,
      shippingFromCountriesIds: [],
      willPayExtra: false,
      extraPayMaxAmount: undefined,
      willReceiveExtra: false,
      extraReceiveMaxAmount: undefined,
      availableUntil: undefined,
      currencyIdPayExtra: 53, // Euro id
      currencyIdReceiveExtra: 53, // Euro id
      willSwapForAnyItem: true,
    },
    validate: {},
  });

  const { itemFormData, GEOAPIFY_API_KEY, currencyData } =
    useLoaderData<typeof loader>();
  const [step, setStep] = useState(1);

  const handleNext = (e?: React.FormEvent<HTMLFormElement>) => {
    if (step < 2) setStep(step + 1); // Move to next step
    // if (step === 2 && e) submit(e.currentTarget);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1); // Move to previous step
  };
  const actionData = useActionData<typeof action>();

  const isSubmitting =
    (navigation.state === "submitting" || navigation.state === "loading") &&
    navigation.formMethod != null &&
    navigation.formMethod != "GET";

  const handleSubmit = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form: UseFormReturnType<any>,
    e?: React.FormEvent<HTMLFormElement>
  ) => {
    const valResults = form.validate();
    console.log("valResults: ", valResults);
    if (valResults.hasErrors) {
      const errorPath = Object.keys(valResults.errors)[0];
      form.getInputNode(errorPath)?.focus();
      return;
    }
    handleNext(e);
  };

  // useEffect(() => {
  //   if (actionData?.error) {
  //     notifications.show({
  //       title: "Error",
  //       message: "There was an error submitting the form",
  //       color: "red",
  //     });
  //   }
  // }, [actionData]);

  return (
    <Form
      method="post"
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   // handleSubmit(stepTwoForm, e);
      // }}
      encType="multipart/form-data"
    >
      <Box
        style={{
          visibility: step === 1 ? "visible" : "hidden",
          display: step === 1 ? "block" : "none",
        }}
      >
        <AddSwapFormStepOne
          geoapifyApkiKey={GEOAPIFY_API_KEY}
          itemFormData={itemFormData}
          form={stepOneForm}
        />
        <FormButtons
          handleBack={handleBack}
          handleNext={() => handleSubmit(stepOneForm)}
          showBackBtn={false}
          wrapperProps={{ mt: "4rem" }}
        />
      </Box>

      <Box
        style={{
          visibility: step === 2 ? "visible" : "hidden",
          display: step === 2 ? "block" : "none",
        }}
      >
        <AddSwapFormStepTwo
          GEOAPIFY_API_KEY={GEOAPIFY_API_KEY}
          itemFormData={itemFormData}
          currencyData={currencyData}
          form={stepTwoForm}
        />
        <FormButtons
          isTypeSubmit={true}
          nextBtnText={"Submit"}
          handleBack={handleBack}
          wrapperProps={{ mt: "4rem" }}
          isSubmitting={isSubmitting}
        />
      </Box>
    </Form>
  );
}
