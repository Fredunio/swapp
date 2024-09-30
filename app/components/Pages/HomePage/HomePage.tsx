import HomeCarousel from "~/components/HomeCarousel/HomeCarousel";

import classes from "./HomePage.module.css";
import HomeItemSection from "~/components/Pages/HomePage/HomeItemSection/HomeItemSection";
import { Button, Flex, Group } from "@mantine/core";
import { ItemCard } from "~/components/Cards/ItemCard/ItemCard";

export default function HomePage() {
  return (
    <main className={classes.wrapper}>
      <HomeCarousel />
      <HomeItemSection header={"Top Picks"} subheader={"Our top picks for you"}>
        {Array.from({ length: 10 }).map((_, index) => (
          <ItemCard key={index} />
        ))}
      </HomeItemSection>
      <HomeItemSection
        header={"New Arrivals"}
        subheader={"Check out our new arrivals"}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <ItemCard key={index} />
        ))}
      </HomeItemSection>
      <Flex
        className="bg-yellow-300 thin-banner"
        justify="space-between"
        align="center"
        p={{ base: "md", md: "lg" }}
      >
        <Group>
          <h3>Get 10% off your first order</h3>
          <p>Subscribe to our newsletter and get 10% off your first order</p>
        </Group>
        <Button>Subscribe</Button>
      </Flex>
    </main>
  );
}
