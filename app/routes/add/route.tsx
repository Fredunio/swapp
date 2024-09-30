import { Box, Button, Flex } from "@mantine/core";
import { Outlet } from "@remix-run/react";

export default function route() {
  return (
    <Box
      style={{
        minHeight: "var(--minPageContentHeight)",
      }}
      className="mx-64 flex justify-center items-center"
    >
      <Box
        p="xl"
        my="80"
        style={{
          border: "1px solid var(--mantine-color-dimmed)",
          borderRadius: "var(--mantine-radius-md)",
          boxShadow: "var(--mantine-shadow-sm)",
        }}
      >
        <Outlet />
        {/* <Flex mt={"80"}>
          <Button
            size="md"
            color="gray"
            variant="outline"
            radius="md"
            //   onClick={() =>
            //     setCurrentStep((crtStep) => (crtStep === 1 ? 1 : crtStep - 1))
            //   }
          >
            Back
          </Button>
          <Button
            // disabled={!swapType}
            size="md"
            color="blue"
            radius="md"
            ml={"auto"}
            // onClick={handleContinue}
          >
            Continue
          </Button>
        </Flex> */}
      </Box>
    </Box>
  );
}
