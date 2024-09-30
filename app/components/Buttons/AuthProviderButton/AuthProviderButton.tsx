import { Button, Image } from "@mantine/core";
import classes from "./AuthProviderButton.module.css";
import { TButtonPropsWithoutRef } from "~/lib/types";

interface AuthProviderButtonProps extends TButtonPropsWithoutRef {
  onClick: () => void;
  children?: React.ReactNode;
  logoSrc?: string;
}

export function AuthProviderButton({
  onClick,
  logoSrc,
  children,
  ...rest // All remaining props, which will be passed to the Button
}: AuthProviderButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={classes.button}
      variant="default"
      {...rest}
    >
      {logoSrc ? <Image className={classes.image} src={logoSrc} /> : children}
    </Button>
  );
}
