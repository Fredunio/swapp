import { Button, ButtonProps, PolymorphicComponentProps } from "@mantine/core";

export default function SignupButton(
  props: PolymorphicComponentProps<"a", ButtonProps>
) {
  return (
    <Button component="a" href="/signup" {...props}>
      Sign up
    </Button>
  );
}
