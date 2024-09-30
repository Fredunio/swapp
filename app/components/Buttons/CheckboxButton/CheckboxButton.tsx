/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import classes from "./CheckboxButton.module.css";
import { Checkbox } from "@mantine/core";

export default function CheckboxButton({
  label,
  value,
  checked,
  setChecked,
  onClick,
  disabled = false,
}: {
  label: string;
  checked: boolean;
  value: any;
  setChecked: React.Dispatch<React.SetStateAction<any>>;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <Checkbox
      disabled={disabled}
      color="blue"
      classNames={classes}
      label={label}
      checked={checked}
      onChange={() => setChecked(value)}
      wrapperProps={{
        onClick: () => {
          setChecked((c: unknown) => (c === value ? undefined : value));
          onClick && onClick();
        },
      }}
    />
  );
}
