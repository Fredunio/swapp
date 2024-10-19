import { ActionIcon, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconShoppingBag, IconXboxX } from "@tabler/icons-react";

export default function ShoppingBagMenuButton() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="right"
        title="Shopping Bag"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        transitionProps={{
          transition: "rotate-left",
          duration: 100,
          timingFunction: "linear",
        }}
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
          "aria-label": "Close modal",
        }}
      >
        {/* Drawer content */}
      </Drawer>
      <ActionIcon
        onClick={open}
        variant="default"
        size="lg"
        aria-label="Shopping Bag"
        radius="xl"
      >
        <IconShoppingBag />
      </ActionIcon>
    </>
  );
}
