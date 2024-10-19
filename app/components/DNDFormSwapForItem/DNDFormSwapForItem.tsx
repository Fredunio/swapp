import { Draggable } from "@hello-pangea/dnd";
import { ActionIcon, Image, Stack, Text } from "@mantine/core";
import cx from "clsx";

import classes from "./DNDFormSwapForItem.module.css";
import { useMemo } from "react";
import { TFormNewItem } from "~/lib/types";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export default function DNDFormSwapForItem({
  item,
  index,
  onEdit,
  onDelete,
}: {
  item: TFormNewItem;
  index: number;
  onEdit: (item: TFormNewItem) => void;
  onDelete: (name: string) => void;
}) {
  const imageUrl = useMemo(() => {
    if (!item.images) return "";
    return URL.createObjectURL(item.images[0]);
  }, [item.images]);

  return (
    // TODO: change the key to something more unique
    <Draggable key={item.name} index={index} draggableId={item.name}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, {
            [classes.itemDragging]: snapshot.isDragging,
          })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            className={cx(classes.wrapperButtons, {
              [classes.itemDragging]: snapshot.isDragging,
            })}
          >
            <Image w={150} h={150} src={imageUrl} alt={item.name} />
            <Stack className="mx-8">
              <Text fw={700} fz="h2">
                {item.name}
              </Text>
              <Text c="dimmed" size="sm">
                {item.quickInfo}
              </Text>
            </Stack>
          </div>
          <Stack>
            <ActionIcon onClick={() => onEdit(item)}>
              <IconEdit />
            </ActionIcon>
            <ActionIcon onClick={() => onDelete(item.name)}>
              <IconTrash />
            </ActionIcon>
          </Stack>
        </div>
      )}
    </Draggable>
  );
}
