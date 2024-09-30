import { ActionIcon, Box, Image, SimpleGrid } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

export default function ImagesPreview({
  images,
  onRemove,
}: {
  images: File[];
  onRemove: (index: number) => void;
}) {
  console.log("images", images);
  return (
    <SimpleGrid
      mt={"sm"}
      cols={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
      }}
    >
      {images.map((image, index) => (
        <Box key={index} style={{ position: "relative" }}>
          <Image
            src={URL.createObjectURL(image)}
            alt="Preview"
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
              borderRadius: 4,
              marginRight: 10,
            }}
          />
          <ActionIcon
            onClick={() => onRemove(index)}
            style={{ position: "absolute", top: 5, right: 5 }}
            size="sm"
            color="red"
            radius="xl"
          >
            <IconX />
          </ActionIcon>
        </Box>
      ))}
    </SimpleGrid>
  );
}
