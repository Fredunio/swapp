import { Anchor, AnchorProps, PolymorphicComponentProps } from "@mantine/core";
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
      {/* <Flex py={40} className="w-full" justify="center" align="center">
        <IconCone2Filled style={{ marginRight: -5 }} width={30} height={30} />
        <IconCone style={{ marginLeft: -5 }} width={30} height={30} />
      </Flex> */}
      Swapp
    </Anchor>
  );
}
