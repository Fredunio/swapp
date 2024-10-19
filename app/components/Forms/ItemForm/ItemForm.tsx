/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Stack,
  TextInput,
  Select,
  TagsInput,
  Button,
  Collapse,
  Flex,
  Textarea,
  Text,
  Box,
  ComboboxData,
} from "@mantine/core";
import { DropzoneImages } from "~/components/Buttons/DropzoneImages/DropzoneImages";
import TextEditor from "~/components/TextEditor/TextEditor";
import { UseFormReturnType } from "@mantine/form";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import ColorPicker from "~/components/ColorPicker/ColorPicker";
import { TFormNewItem, TSerializedItemFormData } from "~/lib/types";
import CityAutocomplete from "./CityAutocomplete/CityAutocomplete";
import { AutocompleteCombobox } from "./AutocompleteCombobox/AutocompleteCombobox";

export default function ItemForm({
  form, // Mantine form
  itemFormData,
  noDescription = false,
  geoapifyApkiKey,
  imagesInputId,
}: {
  form: UseFormReturnType<TFormNewItem>;
  itemFormData: TSerializedItemFormData;
  buttons?: React.ReactNode;
  noDescription?: boolean;
  geoapifyApkiKey: string;
  imagesInputId?: string;
}) {
  itemFormData;
  const [opened, { toggle }] = useDisclosure(false);
  // const [previewImages, setPreviewImages] = useState<File[]>([]);
  const {
    // Brand: brands,
    Category: categories,
    Color: colors,
    Condition: conditions,
    Country: countries,
    Size: sizes,
    Subcategory: subcategories,
  } = { ...itemFormData };

  const [sizeData, setSizeData] = useState<ComboboxData | undefined>([]);

  // ANCHOR TODO: fix subcategory select displaying reseted value, unless clicked and blured
  form.watch("categoryId", ({ previousValue, value }) => {
    if (form.getValues().subcategoryId && previousValue !== value) {
      form.setValues({
        subcategoryId: "",
      });
      form.getInputNode("subcategoryId")?.focus();
      form.getInputNode("subcategoryId")?.click();
      form.getInputNode("subcategoryId")?.blur();
    }
  });

  form.watch("subcategoryId", ({ value, previousValue }) => {
    const hasSubcategoriesChanged = value !== previousValue && value;
    if (hasSubcategoriesChanged) {
      const newSizeData = subcategories
        .find((subcategory) => String(subcategory.id) === value)
        ?.SizeSubcategories.map((size) => {
          // return String(size.sizeId);
          return {
            value: String(size.sizeId),
            label:
              sizes.find((s) => s.id === size.sizeId)?.value +
              " " +
              sizes.find((s) => s.id === size.sizeId)?.unit,
          };
        });
      setSizeData(newSizeData);
      form.getInputNode("sizeId")?.focus();
      form.getInputNode("sizeId")?.click();
      form.getInputNode("sizeId")?.blur();
    }
  });
  return (
    <Box>
      <Stack gap={"xl"}>
        <TextInput
          size="md"
          label="Name"
          placeholder="Item name"
          key={form.key("name")}
          name="name"
          {...form.getInputProps("name")}
        />
        <Select
          error={form.errors.categoryId}
          size="md"
          maxDropdownHeight={200}
          withScrollArea={true}
          label="Category"
          data={
            categories
              ? categories.map((category) => {
                  return {
                    value: String(category.id),
                    label: category.name,
                  };
                })
              : []
          }
          name="categoryId"
          {...form.getInputProps("categoryId")}
        />
        <Select
          error={form.errors.subcategoryId}
          size="md"
          maxDropdownHeight={200}
          withScrollArea={true}
          label="Subcategory"
          data={
            form.getValues().categoryId
              ? subcategories
                  .filter(
                    (subcategory) =>
                      String(subcategory.categoryId) ===
                      form.getValues().categoryId
                  )
                  .map((subcategory) => {
                    return {
                      value: String(subcategory.id),
                      label: subcategory.name,
                    };
                  })
              : []
          }
          name="subcategoryId"
          {...form.getInputProps("subcategoryId")}
        />
        <TagsInput
          clearable={true}
          {...form.getInputProps("tags")}
          size="md"
          label="Press Enter to submit a tag"
          placeholder="Enter tag"
          name="tags"
          error={form.errors.tags}
        />
        <Select
          maxDropdownHeight={200}
          withScrollArea={true}
          error={form.errors.sizeId}
          size="md"
          label="Size"
          placeholder="Size"
          data={sizeData}
          name="sizeId"
          {...form.getInputProps("sizeId")}
        />

        <Select
          error={form.errors.conditionId}
          maxDropdownHeight={200}
          withScrollArea={true}
          size="md"
          label="Condition"
          data={
            conditions
              ? conditions.map((condition) => {
                  return {
                    value: String(condition.id),
                    label: condition.name,
                  };
                })
              : []
          }
          name="conditionId"
          {...form.getInputProps("conditionId")}
        />

        <Stack gap={2}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: "var(--input-label-size, var(--mantine-font-size-md))",
            }}
            component="label"
          >
            Main Color
          </Text>
          <ColorPicker
            error={form.errors.mainColorId}
            allColors={colors}
            onClick={(color) => form.setFieldValue("mainColorId", color.id)}
            selectedColor={colors.find(
              (color) => color.id === form.getValues().mainColorId
            )}
          />
          <input
            type="hidden"
            name="mainColorId"
            {...form?.getInputProps("mainColorId")}
          />
        </Stack>

        <Flex
          display="flex"
          direction={{
            xs: "column",
            sm: "row",
          }}
          gap={"lg"}
          w={"100%"}
        >
          <AutocompleteCombobox
            comboboxProps={{
              size: "md",
            }}
            inputProps={{
              ...form.getInputProps("shippingFromCountryId"),
              label: "Shipping From Country",
              placeholder: "Country of shipping",
              w: "100%",
              error: form.errors.shippingFromCountryId,
              name: "shippingFromCountryId",
              size: "md",
              onSubmit: (e) => {
                e.preventDefault();
              },
            }}
            value={form.getValues().shippingFromCountryId}
            setValue={(val) => form.setFieldValue("shippingFromCountryId", val)}
            options={countries.map((country) => country.name)}
          />

          <CityAutocomplete
            comboboxProps={{
              disabled: !form.getValues().shippingFromCountryId,
            }}
            inputProps={{
              // ...form.getInputProps("shippingFromCityId"),
              label: "Shipping From City",
              placeholder: "City of shipping",
              w: "100%",
              error: form.errors.shippingFromCityId,
              name: "shippingFromCityId",
              size: "md",
            }}
            geoapifyApkiKey={geoapifyApkiKey}
            form={form}
            selectedCountry={String(
              countries.find(
                (country) =>
                  String(country.name) ===
                  form.getValues().shippingFromCountryId
              )?.iso
            ).toLowerCase()}
          />
        </Flex>

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
              label="Model"
              size="md"
              placeholder="Model"
              key={form.key("model")}
              name="model"
              {...form.getInputProps("model")}
            />
            <TextInput
              label="Manufactury Date"
              size="md"
              placeholder="Manufactury Date"
              key={form.key("manufacturyDate")}
              name="manufacturyDate"
              {...form.getInputProps("manufacturyDate")}
            />
            <TextInput
              label="Brand"
              size="md"
              placeholder="Brand"
              key={form.key("brand")}
              name="brand"
              {...form.getInputProps("brand")}
            />
            <Select
              clearable={true}
              label="Made in"
              size="md"
              placeholder="Country"
              searchable
              key={form.key("madeInCountryId")}
              data={
                countries
                  ? countries.map((country) => {
                      return {
                        value: String(country.id),
                        label: country.name,
                      };
                    })
                  : []
              }
              name="madeInCountryId"
              {...form.getInputProps("madeInCountryId")}
            />
          </Stack>
        </Collapse>
        <Textarea
          label="Quick Info"
          size="md"
          description="Short info about the item that will be displayed on the item card"
          placeholder="Info..."
          key={form.key("quickInfo")}
          name="quickInfo"
          {...form.getInputProps("quickInfo")}
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
            id={imagesInputId ? imagesInputId : "imagesDropzone"}
            name="images"
            form={form}
            // onDrop={(files) => {
            //   console.log("files: ", files);
            //   if (files.length === 0) return;
            //   setPreviewImages(files);
            //   form.setFieldValue("images", files);
            // }}
            // id="imagesDropzone"
          />
          {form.errors.images && (
            <Text mt={"sm"} c="var(--mantine-color-error)" size="sm">
              {form.errors.images}
            </Text>
          )}
        </Stack>

        {noDescription ? null : (
          <Stack gap={0}>
            <Text
              style={{
                fontWeight: 500,
                fontSize:
                  "var(--input-label-size, var(--mantine-font-size-md))",
              }}
              component="label"
              htmlFor="description"
            >
              Description
            </Text>
            <TextEditor
              debounceTime={650}
              onUpdate={(content) => form.setFieldValue("description", content)}
              initialContent={form.getValues().description}
            />
            <input
              type="hidden"
              name="description"
              {...form.getInputProps("description")}
            />
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
