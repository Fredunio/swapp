import { createTheme, MantineColorsTuple } from "@mantine/core";

const paleViolet: MantineColorsTuple = [
  "#fdeffe",
  "#f0e0f0",
  "#dcc0db",
  "#c69ec5",
  "#b481b2",
  "#a86ea6",
  "#a465a2",
  "#8f548d",
  "#80497f",
  "#713d70",
];

const oceanBlue: MantineColorsTuple = [
  "#7AD1DD",
  "#5FCCDB",
  "#44CADC",
  "#2AC9DE",
  "#1AC2D9",
  "#11B7CD",
  "#09ADC3",
  "#0E99AC",
  "#128797",
  "#147885",
];

const brightPink: MantineColorsTuple = [
  "#ffecf6",
  "#f7d9e7",
  "#e9b1ca",
  "#dc87ac",
  "#d16493",
  "#ca4d83",
  "#c8407b",
  "#b13269",
  "#9f2a5d",
  "#8c1e50",
];

export const appTheme = createTheme({
  fontFamily: "Inter, sans-serif",
  primaryColor: "pale-violet",
  colors: {
    "pale-violet": paleViolet,
    "ocean-blue": oceanBlue,
    "bright-pink": brightPink,
  },
});
