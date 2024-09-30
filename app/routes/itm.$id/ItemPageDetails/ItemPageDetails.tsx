import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Avatar,
  Box,
  Flex,
  rem,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";

import classes from "./ItemPageDetails.module.css";
import { IconHeart } from "@tabler/icons-react";
import { InfoBoxData } from "./InfoBox/InfoBox";

export default function ItemPageDetails() {
  return (
    <Flex className={classes.wrapper}>
      <ActionIcon
        className={classes["favourite-button"]}
        variant="subtle"
        color="pink"
        radius={"xl"}
        size="xl"
      >
        <IconHeart />
      </ActionIcon>
      <Flex className="w-full">
        <Carousel loop withIndicators height={"full"} w={"100%"} align="start">
          {[1, 2, 3, 4, 5].map((item) => (
            <Carousel.Slide key={item} className="w-full h-full">
              <div className="w-full h-[25em] bg-yellow-100">asdasdsa</div>
            </Carousel.Slide>
          ))}
        </Carousel>
        {/* <Image src="https://via.placeholder.com/300" alt="item" /> */}
      </Flex>
      <Flex className="w-full" p={{ base: "md", xs: "lg", sm: "xl" }}>
        <Box>
          <div className="flex items-center gap-1">
            <Text c="dimmed" fz={"h6"}>
              by{" "}
            </Text>
            <a href="/" className="hover:underline text-blue-400">
              <span className="flex items-center gap-1">
                Seller Name
                <Avatar size="xs" color="blue" variant="gradient" />
              </span>
            </a>
          </div>
          <Text fw={"700"} fz={"h2"}>
            Item Name
          </Text>
          <Stack gap="xl">
            <Text fz={"h5"} c="dimmed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              necessitatibus autem odio quo asperiores sunt debitis fugiat atque
              delectus corporis nobis eaque natus ab, alias rerum. Ea voluptatum
              corporis incidunt.
            </Text>
            <Box>
              <Text mb={"xs"} fw={700} fz={"h4"}>
                Item Details
              </Text>
              <SimpleGrid
                cols={{ base: 1, xs: 2, lg: 1 }}
                spacing={{
                  base: "xs",
                  xs: rem(60),
                  // xs: "xl",
                  lg: "xs",
                }}
                verticalSpacing="xs"
              >
                <InfoBoxData title="Price">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </InfoBoxData>
                <InfoBoxData title="Condition">dasdasdasd</InfoBoxData>
                <InfoBoxData title="Brand">dasdasdasd</InfoBoxData>
                <InfoBoxData title="Color">dasdasdasd</InfoBoxData>
                <InfoBoxData title="Size">dasdasdasd</InfoBoxData>
              </SimpleGrid>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
