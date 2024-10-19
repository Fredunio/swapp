import { UseFormReturnType } from "@mantine/form";
import { TFormNewItem, TSerializedItemFormData } from "~/lib/types";
import FormHeader from "../FormHeader/FormHeader";
import ItemForm from "../ItemForm/ItemForm";

export const AddSwapFormStepOne = ({
  geoapifyApkiKey,
  form,
  itemFormData,
}: {
  form: UseFormReturnType<TFormNewItem>;
  itemFormData: TSerializedItemFormData;
  geoapifyApkiKey: string;
}) => {
  return (
    <>
      <FormHeader
        title="Add your swap"
        description="Tell us about your item and what you would like to swap it for."
      />
      <ItemForm
        geoapifyApkiKey={geoapifyApkiKey}
        itemFormData={itemFormData}
        form={form}
      />
    </>
  );
};
