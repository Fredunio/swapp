/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  NativeSelect,
  NativeSelectProps,
  rem,
  TextInput,
  TextInputProps,
} from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { TSerializedCurrencyData } from "~/lib/types";

// const data = [
//   { value: "eur", label: "🇪🇺 EUR" },
//   { value: "usd", label: "🇺🇸 USD" },
//   { value: "cad", label: "🇨🇦 CAD" },
//   { value: "gbp", label: "🇬🇧 GBP" },
//   { value: "aud", label: "🇦🇺 AUD" },
// ];

export function CurrencyInput({
  textInputProps,
  currencySelectProps,
  currencyData,
  form,
  currencyFieldName,
  moneyValueFieldName,
}: {
  textInputProps?: TextInputProps;
  currencySelectProps?: NativeSelectProps;
  currencyData: TSerializedCurrencyData;
  form?: UseFormReturnType<any>;
  currencyFieldName?: string;
  moneyValueFieldName?: string;
}) {
  const select = (
    // TODO: implement dividers for currency select
    <NativeSelect
      // data={data}
      data={currencyData.Currency.sort((a, b) => {
        // If a or b doesn't have a displayOrder, they go last
        if (a.displayOrder == null) return 1;
        if (b.displayOrder == null) return -1;

        // Sort by displayOrder in ascending order
        return a.displayOrder - b.displayOrder;
      }).map((currency) => {
        return {
          value: String(currency.id),
          label: currency.symbol + " " + currency.isoCode,
        };
      })}
      rightSectionWidth={28}
      styles={{
        input: {
          fontWeight: 500,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          width: rem(100),
          marginRight: rem(-2),
        },
      }}
      {...form?.getInputProps(currencyFieldName || "currencyId")}
      {...currencySelectProps}
    />
  );

  return (
    <TextInput
      type="number"
      rightSection={select}
      rightSectionWidth={100}
      {...form?.getInputProps(moneyValueFieldName || "moneyValue")}
      {...textInputProps}
    />
  );
}
