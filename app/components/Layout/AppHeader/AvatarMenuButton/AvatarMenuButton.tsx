import { Avatar, Menu, rem, Stack } from "@mantine/core";
import {
  IconMessageCircle,
  IconPhoto,
  IconSettings,
  IconShoppingBag,
} from "@tabler/icons-react";
import { forwardRef } from "react";
import LoginButton from "~/components/Buttons/LoginButton/LoginButton";
import SignupButton from "~/components/Buttons/SignupButton/SignupButton";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image?: string;
  name?: string;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, ...others }: UserButtonProps, ref) => (
    <Avatar
      variant="gradient"
      size={"md"}
      name={name}
      ref={ref}
      component="button"
      src={image}
      radius="xl"
      {...others}
    />
  )
);
UserButton.displayName = "UserButton";

export default function AvatarMenuButton({
  ...props
}: {
  props?: UserButtonProps;
}) {
  return (
    <Menu trigger="hover" openDelay={100} shadow="md" width={200}>
      <Menu.Target>
        <UserButton name="John Doe" {...props} />
        {/* <Avatar component="button" name="John Doe" />; */}
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Messages
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconPhoto style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconShoppingBag style={{ width: rem(14), height: rem(14) }} />
          }
        >
          My Items
        </Menu.Item>

        <Menu.Divider />
        <Stack gap={"4"}>
          <LoginButton
            style={{
              width: "100%",
            }}
          />
          <SignupButton
            style={{
              width: "100%",
            }}
          />
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
}
