/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Group,
  Button,
  UnstyledButton,
  Text,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./AppHeader.module.css";
import AppLogo from "~/components/AppLogo/AppLogo";
import ColorSchemeButton from "~/components/Buttons/ColorSchemeButton/ColorSchemeButton";
import AvatarMenuButton from "./AvatarMenuButton/AvatarMenuButton";
import NotificationMenuButton from "./NotificationMenuButton/NotificationMenuButton";
import ShoppingBagMenuButton from "./ShoppingBagMenuButton/ShoppingBagMenuButton";
import Searchbar from "~/components/Layout/AppHeader/Searchbar/Searchbar";
import FavouriteButton from "./FavouriteButton/FavouriteButton";
import { useLocation } from "@remix-run/react";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function AppHeader() {
  const location = useLocation();
  const inDashboard = location.pathname === "/me";
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  {
    /* If in user dashboard - "/me" - header is sticky */
  }
  return (
    <Box className={inDashboard ? classes.sticky : ""}>
      <header className={classes.header}>
        <AppLogo />
        <Searchbar />
        <ColorSchemeButton />
        <Group gap={"xl"} visibleFrom="sm">
          <Group gap={"xs"} visibleFrom="sm">
            <NotificationMenuButton />
            <FavouriteButton />
            <ShoppingBagMenuButton />
            <AvatarMenuButton />
          </Group>
        </Group>
        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Anchor href="#" className={classes.link}>
            Learn
          </Anchor>
          <Anchor href="#" className={classes.link}>
            Academy
          </Anchor>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
