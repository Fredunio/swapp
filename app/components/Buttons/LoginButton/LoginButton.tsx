import { Button, ButtonProps, PolymorphicComponentProps } from "@mantine/core";

export default function LoginButton(
  props: PolymorphicComponentProps<"a", ButtonProps>
) {
  return (
    <Button component="a" href="/login" variant="default" {...props}>
      Log In
    </Button>
  );
}
