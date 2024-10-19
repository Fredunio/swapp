import { useForm, UseFormReturnType } from "@mantine/form";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import {
  TFormNewItem,
  TFormNewSwapTransaction,
  TSerializedCurrencyData,
  TSerializedItemFormData,
} from "~/lib/types";
import FormHeader from "../FormHeader/FormHeader";
import {
  ActionIcon,
  Button,
  Collapse,
  Flex,
  Modal,
  MultiSelect,
  Paper,
  Popover,
  Stack,
  Checkbox,
  Text,
  Tooltip,
  Switch,
} from "@mantine/core";
import ItemForm from "../ItemForm/ItemForm";
import { IconHelp, IconPlus } from "@tabler/icons-react";
import { DNDFormSwapForItemList } from "~/components/DNDFormSwapForItemList/DNDFormSwapForItemList";
import { CurrencyInput } from "~/components/Inputs/CurrencyInput/CurrencyInput";
import { FormButtons } from "../FormButtons/FormButtons";
import { MAX_SWAP_FOR_ITEMS } from "~/lib/constants";
import { notifications } from "@mantine/notifications";

export const AddSwapFormStepTwo = ({
  form,
  itemFormData,
  currencyData,
  GEOAPIFY_API_KEY,
}: {
  form: UseFormReturnType<TFormNewSwapTransaction>;
  itemFormData: TSerializedItemFormData;
  currencyData: TSerializedCurrencyData;
  GEOAPIFY_API_KEY: string;
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");
  const [addButtonPopoverOpened, setAddButtonPopoverOpened] = useState(false);
  const formNewSwapForItem = useForm<TFormNewItem>({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      categoryId: "",
      subcategoryId: "",
      tags: [],
      images: undefined,
      manufacturer: undefined,
      model: undefined,
      manufacturyDate: undefined,
      conditionId: "",
      mainColorId: undefined,
      description: undefined,
      shippingFromCityId: undefined,
      shippingFromCountryId: undefined,
      brand: undefined,
      madeInCountryId: undefined,
      sizeId: undefined,
      quickInfo: "",
    },

    validate: {
      name: (value) => {
        if (!value) return "Name is required";
        return value.length < 3 ? "Name is too short" : null;
      },
      categoryId: (value) => {
        if (!value) return "Category is required";
        return value.length < 3 ? "Category is too short" : null;
      },
      subcategoryId: (value) => {
        if (!value) return "Subcategory is required";
        return value.length < 3 ? "Subcategory is too short" : null;
      },

      images: (value) => {
        if (!value || value.length === 0)
          return "At least one image is required";
        return null;
      },

      quickInfo: (value) => {
        if (!value) return "Please provide a quick info";
        return value.length < 3 ? "Quick info is too short" : null;
      },
    },
  });

  const [swapForItems, setSwapForItems] = useState<
    (typeof formNewSwapForItem.values)[]
  >([]);

  // console.log("swapForItems: ", swapForItems);
  // console.log("Json.stringify(swapForItems): ", JSON.stringify(swapForItems));

  form.watch("shippingFromSameCountry", ({ value }) => {
    if (value === true) {
      form.setFieldValue("shippingFromCountriesIds", []);
    }
  });

  const willSwapForAnyItem = form.getValues().willSwapForAnyItem;

  useEffect(() => {
    form.setFieldValue("wantedItems", swapForItems);
  }, [swapForItems, form]);

  return (
    <>
      <FormHeader
        title="What would you like to swap for?"
        description="Add items you would like to swap for, set extra payment options and shipping preferences"
      />

      <Stack gap={"lg"}>
        <Flex
          display="flex"
          gap={"lg"}
          w={"100%"}
          justify={"space-between"}
          align={"center"}
          my={"xl"}
        >
          <Switch
            w={"100%"}
            {...form.getInputProps("willSwapForAnyItem")}
            // size="md"
            label="Any item is fine"
            defaultChecked={form.getValues().willSwapForAnyItem}
            name="willSwapForAnyItem"
            description={
              willSwapForAnyItem
                ? "If you want a specific item, please uncheck this option"
                : undefined
            }
            fw={700}
            size="xl"
            fz={"h1"}
          />
        </Flex>
        {/* {form.getValues().willSwapForAnyItem && (
          <Text
            fz={"xl"}
            style={{
              fontWeight: 700,
              color: "var(--mantine-color-dimmed)",
              textAlign: "center",
            }}
          >
            .....
          </Text>
        )} */}
        <Collapse in={!form.getValues().willSwapForAnyItem}>
          <Stack gap={0}>
            <Flex display="flex" align={"center"} gap={"xs"} w={"100%"}>
              <Modal
                opened={opened}
                onClose={() => {
                  formNewSwapForItem.reset();
                  close();
                }}
                centered
                size={"xl"}
                closeOnClickOutside={false}
                withCloseButton={false}
                fullScreen={isMobile}
                transitionProps={{ transition: "fade", duration: 100 }}
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
                  geoapifyApkiKey={GEOAPIFY_API_KEY}
                  itemFormData={itemFormData}
                  form={formNewSwapForItem}
                  imagesInputId={formNewSwapForItem.key("images")}
                />
                <FormButtons
                  showBackBtn={false}
                  handleNext={() => {
                    const validationResult = formNewSwapForItem.validate();
                    console.log(
                      "formNewSwapForItem.getValues():",
                      formNewSwapForItem.getValues()
                    );
                    console.log("validationResult: ", validationResult);
                    if (validationResult.hasErrors) {
                      const errorPath = Object.keys(validationResult.errors)[0];
                      form.getInputNode(errorPath)?.focus();
                      return;
                    } else if (
                      swapForItems.some(
                        (item) =>
                          item.name === formNewSwapForItem.getValues().name
                      )
                    ) {
                      form.getInputNode("name")?.focus();
                      formNewSwapForItem.setFieldError(
                        "name",
                        "Item with this name already exists"
                      );
                    } else {
                      const newItem = formNewSwapForItem.getValues();
                      console.log("newItem: ", newItem);
                      setSwapForItems((prev) => [...prev, newItem]);
                      close();
                      formNewSwapForItem.reset();
                    }
                  }}
                  nextBtnText="Add item"
                />
              </Modal>
              <Text fw={"bold"} fz={"h3"}>
                Add items
              </Text>
              {/* TODO: implement adding existing item from users items/ any item in the app created by another user - search input etc */}
              <Popover
                opened={addButtonPopoverOpened}
                disabled={swapForItems.length >= 5}
                withArrow
                position="bottom"
                clickOutsideEvents={["mouseup", "touchend"]}
              >
                <Popover.Target>
                  <ActionIcon
                    onClick={() => setAddButtonPopoverOpened((prev) => !prev)}
                    disabled={swapForItems.length >= 5}
                  >
                    <IconPlus />
                  </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown>
                  <Stack>
                    <Button
                      data-autofocus
                      onClick={() => {
                        setAddButtonPopoverOpened(false);
                        open();
                      }}
                      disabled={swapForItems.length >= 5}
                      fullWidth
                    >
                      New Item
                    </Button>
                    <Button
                      onClick={() => {
                        setAddButtonPopoverOpened(false);
                        notifications.show({
                          title: "Wip!",
                          message:
                            "This feature is not implemented yet, but I'm working hard on it!",
                        });
                      }}
                      disabled={swapForItems.length >= 5}
                      fullWidth
                    >
                      Existing Item
                    </Button>
                  </Stack>
                </Popover.Dropdown>
              </Popover>
            </Flex>
            <Text fz={"sm"} c={"gray"}>
              Items you would like to swap for (max {MAX_SWAP_FOR_ITEMS})
            </Text>
          </Stack>
          {/* Hidden Input for items */}
          <input
            type="hidden"
            name="wantedItems"
            value={JSON.stringify(swapForItems)}
          />
          {/* Inputs for images for swapForItems */}
          {swapForItems.map((item, index) => (
            <input
              key={`${index}-${item.name}`}
              type="file"
              // on the server side, images comes with names like 0-swapForItemsImages, 1-swapForItemsImages, etc.
              name={`${index}-swapForItemsImages`}
              style={{ display: "none", visibility: "hidden" }} // Hide the input
              multiple
              ref={(node) => {
                if (node && item.images) {
                  node.files = item.images;
                }
              }}
            />
          ))}
          {swapForItems.length > 0 ? (
            <DNDFormSwapForItemList
              onDelete={(name) => {
                setSwapForItems((prev) =>
                  prev.filter((item) => item.name !== name)
                );
              }}
              onEdit={(item) => {
                formNewSwapForItem.setValues(item);
                open();
              }}
              items={swapForItems}
            />
          ) : (
            <Paper withBorder ta={"center"} py={"xl"}>
              <Text fz={"md"} c={"gray"}>
                No items added yet
              </Text>
            </Paper>
          )}
        </Collapse>

        <br></br>
        <Flex
          display="flex"
          direction={{
            xs: "column",
            sm: "row",
          }}
          gap={"lg"}
          w={"100%"}
          justify={"space-between"}
          align={"center"}
        >
          <Checkbox
            w={"100%"}
            {...form.getInputProps("shippingFromSameCountry")}
            size="md"
            label="Same country shipping"
            defaultChecked={form.getValues().shippingFromSameCountry}
            name="shippingFromSameCountry"
            style={{
              userSelect: "none",
            }}
          />

          {/* <Divider orientation="vertical" /> */}
          <MultiSelect
            w={"100%"}
            size="md"
            label="Shipping only from"
            placeholder={"Leave empty for any country"}
            data={itemFormData.Country.map((country) => ({
              value: String(country.id),
              label: country.name,
            }))}
            disabled={form.getValues().shippingFromSameCountry}
            searchable
            clearable
            key={form.key("shippingFromCountriesIds")}
            {...form.getInputProps("shippingFromCountriesIds")}
            name="shippingFromCountriesIds"
          />
          <Tooltip label="You can choose to ship only from specific countries. If left empty, you will ship from any country">
            <ActionIcon className="shrink" variant="transparent">
              <IconHelp />
            </ActionIcon>
          </Tooltip>
        </Flex>
        {/* <Divider my="md" /> */}
        <Flex
          display="flex"
          direction={{
            xs: "column",
            sm: "row",
          }}
          gap={"lg"}
          w={"100%"}
          justify={"space-between"}
          align={"center"}
        >
          <Checkbox
            w={"100%"}
            size="md"
            label={"Extra payment for other party"}
            {...form.getInputProps("willPayExtra")}
            defaultChecked={form.getValues().willPayExtra}
            name="willPayExtra"
            style={{
              userSelect: "none",
            }}
          />
          {/* <Divider orientation="vertical" /> */}
          <CurrencyInput
            textInputProps={{
              placeholder: "Enter amount",
              label: "Would you like to pay extra?",
              w: "100%",
              error: form.errors.extraPayMaxAmount,
              ...form.getInputProps("extraPayMaxAmount"),
              disabled: !form.getValues().willPayExtra,
              name: "extraPayMaxAmount",
            }}
            currencySelectProps={{
              ...form.getInputProps("currencyIdPayExtra"),
              disabled: !form.getValues().willPayExtra,
              mah: "100px",
              name: "currencyIdPayExtra",
            }}
            currencyData={currencyData}
            currencyFieldName="currencyIdPayExtra"
            moneyValueFieldName="extraPayMaxAmount"
          />

          <Tooltip label="The other party can offer you to pay extra for the swap, if your item is less valuable.">
            <ActionIcon className="shrink" variant="transparent">
              <IconHelp />
            </ActionIcon>
          </Tooltip>
        </Flex>

        <Flex
          display="flex"
          direction={{
            xs: "column",
            sm: "row",
          }}
          gap={"lg"}
          w={"100%"}
          justify={"space-between"}
          align={"center"}
        >
          <Checkbox
            w={"100%"}
            size="md"
            label="Extra payment for You"
            defaultChecked={form.getValues().willReceiveExtra}
            name="willReceiveExtra"
            {...form.getInputProps("willReceiveExtra")}
            style={{
              userSelect: "none",
            }}
          />

          <CurrencyInput
            textInputProps={{
              placeholder: "Enter amount",
              label: "Would you like to receive extra payment?",
              w: "100%",
              error: form.errors.extraReceiveMaxAmount,
              name: "extraReceiveMaxAmount",
              ...form.getInputProps("extraReceiveMaxAmount"),
              disabled: !form.getValues().willReceiveExtra,
            }}
            currencySelectProps={{
              ...form.getInputProps("currencyIdReceiveExtra"),
              name: "currencyIdReceiveExtra",
              disabled: !form.getValues().willReceiveExtra,
            }}
            currencyData={currencyData}
            currencyFieldName="currencyIdReceiveExtra"
            moneyValueFieldName="extraReceiveMaxAmount"
          />
          <Tooltip label="The other party can offer you an extra payment for the swap, if their item is less valuable.">
            <ActionIcon className="shrink" variant="transparent">
              <IconHelp />
            </ActionIcon>
          </Tooltip>
        </Flex>
      </Stack>
    </>
  );
};
