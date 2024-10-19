import { Carousel } from "@mantine/carousel";
import { Flex, Stack, Text } from "@mantine/core";
import React from "react";

import classes from "./HomeItemSection.module.css";

export default function HomeItemSection({
  header,
  subheader,
  children,
}: {
  header: string;
  subheader: string;
  children: React.ReactNode;
}) {
  return (
    <Stack gap={0} className={classes.wrapper}>
      <Flex
        mx={{ base: "auto", sm: "0px", md: 0 }}
        gap={0}
        direction="column"
        align={{ base: "center", md: "start" }}
        justify="center"
        mb={{ base: "md", md: "lg" }}
      >
        <Text component="h3" fz={"h3"} fw={700}>
          {header}
        </Text>
        <Text component="h4" fz={"h5"}>
          {subheader}
        </Text>
      </Flex>
      <Carousel
        align="start"
        className="overflow-y-visible"
        controlsOffset="lg"
        controlSize={40}
        height={700}
        loop
        slideSize={{
          base: "100%",
          xs: "100%",
          sm: "45%",
          md: "38%",
          lg: "33%",
        }}
        slideGap={{ base: "xs", xs: "sm", sm: "md" }}
      >
        {React.Children.map(children, (child) => (
          <Carousel.Slide
            // padding for card shadow to be visible
            py={20}
          >
            {child}
          </Carousel.Slide>
        ))}
      </Carousel>
    </Stack>
  );
}
