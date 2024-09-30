import { NativeSelect, rem, TextInput, TextInputProps } from "@mantine/core";

const data = [
  { value: "eur", label: "🇪🇺 EUR" },
  { value: "usd", label: "🇺🇸 USD" },
  { value: "cad", label: "🇨🇦 CAD" },
  { value: "gbp", label: "🇬🇧 GBP" },
  { value: "aud", label: "🇦🇺 AUD" },
];

export function CurrencyInput(props: TextInputProps) {
  const select = (
    <NativeSelect
      data={data}
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
    />
  );

  return (
    <TextInput
      type="number"
      rightSection={select}
      rightSectionWidth={100}
      {...props}
    />
  );
}
