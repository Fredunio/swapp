import { Image, Group, Badge, Box, AspectRatio, Text } from "@mantine/core";
import classes from "./ItemCard.module.css";
import { useCallback, useEffect, useMemo, useRef } from "react";

const mockdata = {
  image:
    "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  title: "Verudela Beach",
  country: "Croatia",
  description:
    "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  badges: [
    { emoji: "☀️", label: "Sunny weather" },
    { emoji: "🦓", label: "Onsite zoo" },
    { emoji: "🌊", label: "Sea" },
    { emoji: "🌲", label: "Nature" },
    { emoji: "🤽", label: "Water sports" },
  ],
};

type TCardAspectRatio = "mini" | "square" | "wide";

const aspectRatios: Record<
  TCardAspectRatio,
  { container: number; image: number }
> = {
  mini: {
    container: 5.3 / 8.6,
    image: 4.2 / 6.2,
  },
  square: {
    container: 7.2 / 8.6,
    image: 1,
  },
  wide: {
    container: 10.8 / 8.6,
    image: 6.2 / 9.9,
  },
};

export function ItemCard({
  aspect = "square",
}: {
  aspect?: TCardAspectRatio | number | undefined;
}) {
  const { image, title, description, country } = mockdata;

  const containerRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const options = useMemo(() => {
    if (typeof window === "undefined") {
      return {}; // Return an empty object when rendering on the server
    }

    return {
      root: null,
      rootMargin: "0px",
      // rootMargin: `${convertRemToPixels(
      //   getComputedStyle(document.documentElement).getPropertyValue(
      //     "--header-h"
      //   )
      // )}px 0px ${convertRemToPixels(
      //   getComputedStyle(document.documentElement).getPropertyValue(
      //     "--footer-h"
      //   )
      // )}px 0px`,
      threshold: 0.1,
    };
  }, []);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      const img = imageRef.current;
      if (entry.isIntersecting && img) {
        img.classList.add(classes["developed"]);
        console.log("Image is visible: ", classes["developed"]);
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [observerCallback, options]);

  return (
    <AspectRatio
      ratio={
        typeof aspect === "string" ? aspectRatios[aspect].container : aspect
      }
      maw={450}
      mx="auto"
    >
      <Box ref={containerRef} component="a" href="#" className={classes.card}>
        <Box className={classes["top-tape"]} />
        <Box className="relative ">
          <Box className="overflow-hidden relative ">
            <AspectRatio
              ratio={
                typeof aspect === "string" ? aspectRatios[aspect].image : aspect
              }
              maw={450}
              mx="auto"
            >
              <Box
                w="100%"
                h="100%"
                bg={"var(--mantine-color-gray-2)"}
                className="absolute"
                top={0}
                left={0}
              />
              <Image
                ref={imageRef}
                className={classes.image}
                src={image}
                alt={title}
                height={200}
              />
            </AspectRatio>
          </Box>
          <Text className={classes["signature"]}>Reenie Beanie</Text>
        </Box>
        <Box className={classes.section}>
          <Group justify="apart">
            <h4 className={classes["item-name"]}>{title}</h4>
            <Badge size="sm" variant="dark">
              {country}
            </Badge>
          </Group>
          <Text lineClamp={2} className={classes["item-description"]}>
            {description}
          </Text>
        </Box>
      </Box>
    </AspectRatio>
  );
}

// const features = badges.map((badge) => (
//   <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
//     {badge.label}
//   </Badge>
// ));

{
  /* <Card withBorder radius="md" p="md" className={classes.card}>
<Card.Section>
  <Image src={image} alt={title} height={180} />
</Card.Section>

<Card.Section className={classes.section} mt="md">
  <Group justify="apart">
    <Text fz="lg" fw={500}>
      {title}
    </Text>
    <Badge size="sm" variant="light">
      {country}
    </Badge>
  </Group>
  <Text fz="sm" mt="xs">
    {description}
  </Text>
</Card.Section>

<Card.Section className={classes.section}>
  <Text mt="md" className={classes.label} c="dimmed">
    Perfect for you, if you enjoy
  </Text>
  <Group gap={7} mt={5}>
    {features}
  </Group>
</Card.Section>

<Group mt="xs">
  <Button radius="md" style={{ flex: 1 }}>
    Show details
  </Button>
  <ActionIcon variant="default" radius="md" size={36}>
    <IconHeart className={classes.like} stroke={1.5} />
  </ActionIcon>
</Group>
</Card> */
}
