import { ButtonProps } from "@mantine/core";
import { swapTypes } from "./constants";
export type TButtonPropsWithoutRef = ButtonProps &
  React.ComponentPropsWithoutRef<"button">;

// export type TswapType = (typeof swapTypes)[number];
export type TswapType = (typeof swapTypes)[number];

export type AddSwapFormValues = {
  name: string | undefined;
  category: string | undefined;
  images: string[] | undefined;
  tags: string[] | undefined;
  manufacturer: string | undefined;
  model: string | undefined;
  manufacturerDate: string | undefined;
  subcategory: string | undefined;
  description: string | undefined;
  condition: string | undefined;
  canPayExtra: boolean | undefined;
  extraPayAmount: string | undefined;
  mainColor: string | undefined;
  brand: string | undefined;
  size: string | undefined;
  additionalInfo: string | undefined;
  shippingFromCountry: string | undefined;
  shippingFromCity: string | undefined;
  shipping: string | undefined;
  swapFor: string | undefined;
  preferredSwapFor: string[] | undefined;
  availableUntil: string | undefined;
};
