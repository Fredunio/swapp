import { Image } from "@mantine/core";
import { AuthProviderButton } from "../AuthProviderButton/AuthProviderButton";

import classes from "./AppleAuthButton.module.css";

export default function AppleAuthButton() {
  return (
    <AuthProviderButton size="lg" radius="xl" onClick={() => {}}>
      <Image
        src={"/logos/apple_logo_black.png"}
        className={`${classes.logo} ${classes["logo-black"]}`}
      />
      <Image
        src={"/logos/apple_logo_white.png"}
        className={`${classes.logo} ${classes["logo-white"]}`}
      />
    </AuthProviderButton>
  );
}
