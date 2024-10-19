import { useListState } from "@mantine/hooks";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import DNDFormSwapForItem from "../DNDFormSwapForItem/DNDFormSwapForItem";
import { TFormNewItem } from "~/lib/types";
import { useEffect } from "react";

export function DNDFormSwapForItemList({
  items,
  onDelete,
  onEdit,
}: {
  items: TFormNewItem[];
  onDelete: (name: string) => void;
  onEdit: (item: TFormNewItem) => void;
}) {
  const [state, handlers] = useListState<TFormNewItem>(items);

  useEffect(() => {
    handlers.setState(items);
  }, [items, handlers]);

  console.log("DNDFormSwapForItemList", state);
  console.log("items", items);

  const dndItems = state.map((item, index) => (
    <DNDFormSwapForItem
      onDelete={onDelete}
      onEdit={() => onEdit(item)}
      key={item.name}
      item={item}
      index={index}
    />
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {dndItems}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
