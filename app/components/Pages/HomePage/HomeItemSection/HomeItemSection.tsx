import { Carousel } from "@mantine/carousel";
import { Stack, Text } from "@mantine/core";
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
      <Text component="h3" fz={"h3"} fw={700}>
        {header}
      </Text>
      <Text component="h4" fz={"h5"}>
        {subheader}
      </Text>
      <Carousel
        align="start"
        className="overflow-y-visible"
        controlsOffset="lg"
        controlSize={40}
        height={420}
        loop
        slideSize={{ base: "100%", xs: "50%", sm: "40%", md: "30%", lg: "25%" }}
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
