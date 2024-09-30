import { ActionIcon } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";

export default function FavouriteButton() {
  return (
    <ActionIcon variant="default" size="lg" aria-label="Favourite" radius="xl">
      <IconHeart />
    </ActionIcon>
  );
}
