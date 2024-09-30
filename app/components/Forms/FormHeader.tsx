import { Box, Text } from "@mantine/core";

export default function FormHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Box mb={"xl"}>
      <Text fw="700" fz="3rem">
        {title}
      </Text>
      <Text fz="h4" c="dimmed">
        {description}
      </Text>
    </Box>
  );
}
