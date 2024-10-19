import { Box, Flex } from "@mantine/core";
import { Outlet } from "@remix-run/react";

export default function AddPageLayout() {
  return (
    <Flex
      style={{
        minHeight: "var(--minPageContentHeight)",
      }}
      // className="mx-64 flex justify-center items-center"
      direction="column"
      align="center"
      justify="center"
      mx={{
        base: "auto",
      }}
    >
      <Box
        w={{
          base: "100%",
          sm: "80%",
          md: "60%",
          lg: "50%",
        }}
        className="add-page-form-wrapper"
        style={{
          borderRadius: "var(--mantine-radius-md)",
        }}
      >
        <Outlet />
      </Box>
    </Flex>
  );
}
