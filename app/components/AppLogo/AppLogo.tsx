import {
  Anchor,
  AnchorProps,
  Image,
  PolymorphicComponentProps,
} from "@mantine/core";
import classes from "./AppLogo.module.css";

export default function AppLogo(
  props?: PolymorphicComponentProps<"a", AnchorProps>
) {
  return (
    <Anchor<"a">
      gradient={{ from: "pink", to: "blue" }}
      href="/"
      underline="never"
      fz={"h1"}
      className={classes.logo}
      variant="gradient"
      fw={600}
      {...props}
    >
      <Image src="/logos/swapp-logo.png" alt="Swapp" height={40} w={100} />
    </Anchor>
  );
}
// swapp-logo.png
