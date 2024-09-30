import { AppShell, Box } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
import { AppHeader } from "../AppHeader/AppHeader";
import { useLocation } from "@remix-run/react";
import { AppFooter } from "../AppFooter/AppFooter";
import CategoriesSubheader from "../AppHeader/CategoriesSubheader/CategoriesSubheader";

const noLayoutPages = ["/login", "/signup"];
const showCategoriesSubheader = ["/s"];
const noPaddingPages = ["/me", "/add"];
const noFooterPages = ["/me", "/add"];
const indexPage = "/";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  //   const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const path = location.pathname;

  const pathStartsWith = (prefixes: string[]) =>
    prefixes.some((prefix) => path.startsWith(prefix));

  if (noLayoutPages.includes(location.pathname)) {
    return <>{children}</>;
  }

  return (
    <AppShell
    // header={{ height: "var(--header-h)" }}
    //   navbar={{
    //     width: 300,
    //     breakpoint: 'sm',
    //     collapsed: { mobile: !opened },
    //   }}
    // padding="xl"
    >
      <>
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
        <AppHeader />
        {location.pathname === indexPage ||
        pathStartsWith(showCategoriesSubheader) ? (
          <CategoriesSubheader />
        ) : null}
      </>

      <Box
        style={{
          minHeight: "var(--minPageContentHeight)",
        }}
        // py={{ xs: "lg", md: "xl" }}
        // px={{ xs: 0, sm: "lg", md: "xl" }}
        py={pathStartsWith(noPaddingPages) ? 0 : { xs: "lg", md: "xl" }}
        px={pathStartsWith(noPaddingPages) ? 0 : { xs: 0, sm: "lg", md: "xl" }}
      >
        {children}
      </Box>

      <>{pathStartsWith(noFooterPages) ? null : <AppFooter />}</>
    </AppShell>
  );
}
