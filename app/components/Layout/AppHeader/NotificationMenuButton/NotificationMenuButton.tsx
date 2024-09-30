import { ActionIcon, Divider, Menu, Notification } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";

export default function NotificationMenuButton() {
  return (
    <Menu trigger="hover" openDelay={100}>
      <Menu.Target>
        <ActionIcon
          variant="default"
          size="lg"
          aria-label="Notifications"
          radius="xl"
        >
          <IconBell />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Notification title="We notify you that">
          You are now obligated to give a star to Mantine project on GitHub
        </Notification>
        <Divider />
        <Notification title="Good News!">
          You have been selected as the winner of the Mantine giveaway
        </Notification>

        {/* <Menu.Divider /> */}
      </Menu.Dropdown>
    </Menu>
  );
}
