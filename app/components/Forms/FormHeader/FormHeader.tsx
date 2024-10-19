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
      <Text
        style={{
          lineHeight: "1.2",
        }}
        fw="700"
        fz="3rem"
      >
        {title}
      </Text>
      <Text fz="h4" c="dimmed" mt={10}>
        {description}
      </Text>
    </Box>
  );
}
