import { ActionIcon, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconShoppingBag, IconXboxX } from "@tabler/icons-react";

// TODO: convert to drawer
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

{
  /* <Menu trigger="hover" openDelay={100} width={200}>
        <Menu.Target>
          <ActionIcon
            variant="default"
            size="lg"
            aria-label="Shopping Bag"
            radius="xl"
          >
            <IconShoppingBag />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Test</Menu.Item>
        </Menu.Dropdown>
      </Menu> */
}
