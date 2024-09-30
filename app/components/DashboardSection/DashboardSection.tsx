import { Box, Text } from "@mantine/core";
import classes from "./DashboardSection.module.css";

export default function DashboardSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <Box p={"xl"} className={classes.wrapper}>
      <Text fw={"700"} fz={"h3"}>
        {title}
      </Text>
      {subtitle && (
        <Text fz={"h5"} c={"dimmed"}>
          {subtitle}
        </Text>
      )}
      <Box mt={"lg"}>{children}</Box>
    </Box>
  );
}
