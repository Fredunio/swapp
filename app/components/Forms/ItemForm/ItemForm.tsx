/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Stack,
  TextInput,
  Select,
  TagsInput,
  Button,
  Collapse,
  Flex,
  Autocomplete,
  Textarea,
  Text,
} from "@mantine/core";
import { Editor } from "@tiptap/react";
import { Form } from "@remix-run/react";
import { DropzoneImages } from "~/components/Buttons/DropzoneImages/DropzoneImages";
import TextEditor from "~/components/TextEditor/TextEditor";
import ImagesPreview from "../ImagesPreview/ImagesPreview";
import { UseFormReturnType } from "@mantine/form";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

export default function ItemForm({
  form,
  editor,
  onSubmit,
  buttons,
  noButtons = false,
}: {
  form: UseFormReturnType<any>;
  editor?: Editor | null;
  onSubmit: () => void;
  buttons?: React.ReactNode;
  noButtons?: boolean;
}) {
  const [opened, { toggle }] = useDisclosure(false);
  const [previewImages, setPreviewImages] = useState<File[]>([]);

  return (
    <Form onSubmit={onSubmit}>
      <Stack gap={"lg"}>
        <TextInput
          size="md"
          label="Name"
          placeholder="Item name"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <Select size="md" label="Category" data={["React", "Angular", "Vue"]} />
        <Select
          size="md"
          label="Subcategory"
          data={["React", "Angular", "Vue"]}
        />
        <TagsInput
          size="md"
          label="Press Enter to submit a tag"
          placeholder="Enter tag"
        />
        <Select
          size="md"
          label="Condition"
          data={["React", "Angular", "Vue"]}
        />
        <Select
          size="md"
          label="Main Color"
          data={["React", "Angular", "Vue"]}
        />
        <TextInput
          size="md"
          label="Size"
          placeholder="Size"
          key={form.key("size")}
          {...form.getInputProps("size")}
        />
        <Text fz={"md"} fw={"bold"}>
          Want to add more details?
          <Button
            style={{
              marginLeft: "4px",
            }}
            size="compact-sm"
            onClick={toggle}
          >
            {opened ? "Hide" : "Show"}
          </Button>
        </Text>
        <Collapse in={opened}>
          <Stack gap={"lg"}>
            <TextInput
              size="md"
              label="Manufacturer"
              placeholder="Manufacturer"
              key={form.key("manufacturer")}
              {...form.getInputProps("manufacturer")}
            />
            <TextInput
              label="Model"
              size="md"
              placeholder="Model"
              key={form.key("model")}
              {...form.getInputProps("model")}
            />
            <TextInput
              label="Manufacturer Date"
              size="md"
              placeholder="Manufacturer Date"
              key={form.key("manufacturerDate")}
              {...form.getInputProps("manufacturerDate")}
            />
            <TextInput
              label="Brand"
              size="md"
              placeholder="Brand"
              key={form.key("brand")}
              {...form.getInputProps("brand")}
            />
          </Stack>
        </Collapse>

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
            key={form.key("shippingFromCountry")}
            {...form.getInputProps("shippingFromCountry")}
            data={["React", "Angular", "Vue", "Svelte"]}
          />
          <Autocomplete
            w={"100%"}
            size="md"
            id="shippingFromCity"
            label="Shipping From City"
            placeholder="City of shipping"
            key={form.key("shippingFromCity")}
            {...form.getInputProps("shippingFromCity")}
            data={["React", "Angular", "Vue", "Svelte"]}
          />
        </Flex>
        <Textarea
          label="Additional Info"
          size="md"
          description="Any additional information you would like to share"
          placeholder="Additional Info"
          key={form.key("additionalInfo")}
          {...form.getInputProps("additionalInfo")}
        />
        {/* Extra Info */}

        <Stack gap={0}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: "var(--input-label-size, var(--mantine-font-size-md))",
            }}
            component="label"
            htmlFor="imagesDropzone"
          >
            Images
          </Text>
          <DropzoneImages
            onDrop={(files) => {
              setPreviewImages(files);
              form.setFieldValue("images", files);
              console.log("form.getValues(): ", form.getValues());
            }}
            id="imagesDropzone"
          />
          <ImagesPreview
            images={previewImages}
            onRemove={(index) => {
              const newImages = previewImages.filter((_, i) => i !== index);
              setPreviewImages(newImages);
              form.setFieldValue("images", newImages);
            }}
          />
        </Stack>
        <Stack gap={0}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: "var(--input-label-size, var(--mantine-font-size-sm))",
            }}
            component="label"
            htmlFor="description"
          >
            Description
          </Text>
          {editor && <TextEditor editor={editor} />}
        </Stack>
        <Flex
          display="flex"
          direction={{
            xs: "column",
            sm: "row",
          }}
          gap={"lg"}
          w={"100%"}
        ></Flex>
      </Stack>
      {buttons ? (
        buttons
      ) : noButtons ? null : (
        <Flex>
          <Button type="submit" size="lg" mt={"xl"} ml={"auto"}>
            Submit
          </Button>
        </Flex>
      )}
    </Form>
  );
}
