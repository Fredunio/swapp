import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconBulbFilled } from "@tabler/icons-react";
import cx from "clsx";

import classes from "./ColorSchemeButton.module.css";

export default function ColorSchemeButton({
  className,
}: {
  className?: string;
}) {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      className={className}
      onClick={() => toggleColorScheme()}
      variant="transparent"
      size="lg"
      radius={"xl"}
      aria-label="Toggle color scheme"
    >
      <IconBulbFilled
        className={cx(classes.icon, classes.light)}
        stroke={1.5}
      />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
