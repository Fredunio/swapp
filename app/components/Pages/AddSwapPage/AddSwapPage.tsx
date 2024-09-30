import {
  ActionIcon,
  Autocomplete,
  Button,
  Flex,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import { useForm, UseFormReturnType } from "@mantine/form";
import FormHeader from "../../Forms/FormHeader";
import { Link } from "@mantine/tiptap";

import { useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { CurrencyInput } from "~/components/Inputs/CurrencyInput/CurrencyInput";
import { useState } from "react";
import { IconPlus } from "@tabler/icons-react";
import ItemForm from "~/components/Forms/ItemForm/ItemForm";

const editorContent =
  '<h2 style="text-align: center;">Describe your item...</h2><p>Here You can provide a detailed description of your item. Include any relevant information that will help others understand what you are offering.</p>';

const FormButtons = ({
  handleNext,
  handleBack,
  backBtnText,
  nextBtnText,
  showBackBtn = true,
}: {
  handleNext: () => void;
  handleBack: () => void;
  backBtnText?: string;
  nextBtnText?: string;
  showBackBtn?: boolean;
}) => {
  return (
    <Flex
      display="flex"
      direction={{
        xs: "column",
        sm: "row",
      }}
      gap={"lg"}
      justify={"space-between"}
      w={"100%"}
      mt={"xl"}
    >
      {showBackBtn && (
        <Button onClick={handleBack} size="lg" variant="outline">
          {backBtnText || "Back"}
        </Button>
      )}
      <Button onClick={handleNext} size="lg" ml={"auto"}>
        {nextBtnText || "Next"}
      </Button>
    </Flex>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddSwapFormStepOne = ({ form }: { form: UseFormReturnType<any> }) => {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: editorContent,
    immediatelyRender: false, // avoid hydration mismatches
  });

  return (
    <>
      <FormHeader
        title="Add your swap"
        description="Tell us about your item and what you would like to swap it for."
      />
      <ItemForm
        form={form}
        editor={editor}
        onSubmit={() => console.log(form.getValues())}
        noButtons={true}
        // buttons={
        //   <Flex
        //     display="flex"
        //     direction={{
        //       xs: "column",
        //       sm: "row",
        //     }}
        //     gap={"lg"}
        //     justify={"space-between"}
        //     w={"100%"}
        //     mt={"xl"}
        //   >
        //     <Button onClick={handleBack} size="lg" variant="outline">
        //       Back
        //     </Button>
        //     <Button onClick={handleNext} size="lg">
        //       Next
        //     </Button>
        //   </Flex>
        // }
      />
    </>
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddSwapFormStepTwo = ({ form }: { form: UseFormReturnType<any> }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  const formNewSwapForItem = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      category: "",
      subcategory: "",
      images: [],
      manufacturer: "",
      model: "",
      manufacturyDate: "",
      condition: "",
      mainColor: "",
      brand: "",
      size: "",
      additionalInfo: "",
    },

    validate: {},
  });

  return (
    <>
      <FormHeader
        title="What would you like to swap for?"
        description="Add the items you would like to swap for. You can add multiple items."
      />

      <Stack gap={"lg"}>
        <Flex display="flex" align={"center"} gap={"xs"} w={"100%"}>
          <Modal
            opened={opened}
            onClose={close}
            centered
            size="auto"
            withCloseButton={false}
            fullScreen={isMobile}
            transitionProps={{ transition: "fade", duration: 200 }}
          >
            <Modal.Header>
              <Modal.Title>
                <Text fz={"h3"} fw={700}>
                  Item details
                </Text>
              </Modal.Title>
              <Modal.CloseButton />
            </Modal.Header>
            <ItemForm
              form={formNewSwapForItem}
              onSubmit={() => console.log(formNewSwapForItem.getValues())}
            />
          </Modal>
          <Text fw={"bold"} fz={"h3"}>
            Add item
          </Text>
          <ActionIcon onClick={open}>
            <IconPlus />
          </ActionIcon>
        </Flex>
        <Flex
          display="flex"
          direction={{
            xs: "column",
            sm: "row",
          }}
          gap={"lg"}
          w={"100%"}
        >
          <Autocomplete
            w={"100%"}
            size="md"
            id="shippingFromCountry"
            label="Shipping From Country"
            placeholder="Country of shipping"
            key={formNewSwapForItem.key("shippingFromCountry")}
            {...formNewSwapForItem.getInputProps("shippingFromCountry")}
            data={["React", "Angular", "Vue", "Svelte"]}
          />
          <Autocomplete
            w={"100%"}
            size="md"
            id="shippingFromCity"
            label="Shipping From City"
            placeholder="City of shipping"
            key={formNewSwapForItem.key("shippingFromCity")}
            {...formNewSwapForItem.getInputProps("shippingFromCity")}
            data={["React", "Angular", "Vue", "Svelte"]}
          />
        </Flex>
        <CurrencyInput
          disabled={true}
          size="md"
          label="Would you like to pay extra?"
          description="Up to how much are you willing to pay extra?"
          key={form.key("extraPayAmount")}
          {...form.getInputProps("extraPayAmount")}
        />
      </Stack>
    </>
  );
};

export default function AddSwapPage() {
  // TODO: extract this form to a separate component, so it is a form of an Item - adding, editing
  const stepOneForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: undefined,
      category: undefined,
      images: [],
      tags: [],
      manufacturer: undefined,
      model: undefined,
      manufacturyDate: undefined,
      subcategory: undefined,
      description: undefined,
      condition: undefined,
      mainColor: undefined,
      brand: undefined,
      size: undefined,
      additionalInfo: undefined,
      shippingFromCountry: undefined,
      shippingFromCity: undefined,
    },

    validate: {},
  });

  const stepTwoForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      swapFor: undefined,
      preferredSwapFor: [],
      canPayExtra: false,
      extraPayAmount: undefined,
      availableUntil: undefined,
    },

    validate: {},
  });

  const [step, setStep] = useState(1);
  const handleNext = () => {
    if (step < 2) setStep(step + 1); // Move to next step
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1); // Move to previous step
  };

  return (
    <>
      {step === 1 && (
        <form onSubmit={stepOneForm.onSubmit((values) => console.log(values))}>
          <AddSwapFormStepOne form={stepOneForm} />
          <FormButtons
            handleNext={handleNext}
            handleBack={handleBack}
            showBackBtn={false}
          />
        </form>
      )}
      {step === 2 && (
        <form onSubmit={stepOneForm.onSubmit((values) => console.log(values))}>
          <AddSwapFormStepTwo form={stepTwoForm} />
          <FormButtons handleNext={handleNext} handleBack={handleBack} />
        </form>
      )}
    </>
  );
}
