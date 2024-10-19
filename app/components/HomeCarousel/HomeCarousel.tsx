import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import classes from "./HomeCarousel.module.css";

const images = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
];

export default function HomeCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnMouseEnter: true }));

  return (
    <Carousel
      classNames={{
        indicator: classes.indicator,
        root: classes.root,
        controls: classes.controls,
      }}
      slideSize="100%"
      height={300}
      loop
      withIndicators
      plugins={[autoplay.current]}
      onMouseLeave={autoplay.current.reset}
      controlSize={50}
    >
      {images.map((image, index) => (
        <Carousel.Slide key={image}>
          <Image
            className=" w-full h-full"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
