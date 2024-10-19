import { ColorSwatch, Group, Stack, Text, Tooltip } from "@mantine/core";

import { SerializeFrom } from "@remix-run/node";
import { Color } from "~/graphql/generated";
import { TSelectColor } from "~/lib/types";

// ANCHOR TODO: implement display_order field in the UI
export default function ColorPicker({
  allColors,
  selectedColor,
  onClick,
  error,
}: {
  allColors: SerializeFrom<Color>[];
  selectedColor: TSelectColor | undefined;
  onClick: (color: SerializeFrom<Color>) => void;
  error?: string | React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) {
  // console.log("error: ", error);
  return (
    <Stack>
      <Group>
        {allColors.map((color) => (
          <Tooltip key={color.hexCode} label={color.name}>
            <ColorSwatch
              key={color.hexCode}
              component="button"
              type="button"
              color={color.hexCode}
              onClick={() => onClick(color)}
              style={{
                cursor: "pointer",
                border:
                  selectedColor?.hexCode === color.hexCode
                    ? "2px solid #009790"
                    : "none",
                outline:
                  selectedColor?.hexCode === color.hexCode
                    ? "2px solid #009790"
                    : "none",
              }}
            />
          </Tooltip>
        ))}
      </Group>
      {error && (
        <Text fz={"sm"} style={{ color: "var(--mantine-color-red-6)" }}>
          {error}
        </Text>
      )}
    </Stack>
  );
}
