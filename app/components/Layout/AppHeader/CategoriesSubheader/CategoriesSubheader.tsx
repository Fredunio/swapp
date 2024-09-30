import { Box } from "@mantine/core";
import classes from "./CategoriesSubheader.module.css";

const mockCategories = [
  "All",
  "Furniture",
  "Clothing",
  "Electronics",
  "Books",
  "Toys",
  "Tools",
  "Beauty",
  "Health",
  "Sports",
  "Outdoors",
  "Automotive",
  "Other",
];

export default function CategoriesSubheader() {
  return (
    <Box
      mx={{
        base: 0,
        md: "xl",
      }}
      className={classes.wrapper}
      key="categories"
    >
      {mockCategories.map((category) => (
        <a href={category} className={classes.link} key={category}>
          {category}
        </a>
      ))}
    </Box>
  );

  // return (
  //   <CategoriesDropdown>
  //     <CategoriesDropdown.Links
  //       onLinkHover={setActiveIndex}
  //       activeIndex={activeIndex}
  //     >
  //       {mockCategories.map((category) => (
  //         <Anchor className={classes.link} fz={"sm"} key={category}>
  //           {category}
  //         </Anchor>
  //       ))}
  //     </CategoriesDropdown.Links>

  //     <CategoriesDropdown.Content activeIndex={activeIndex}>
  //       sdasd
  //     </CategoriesDropdown.Content>
  //   </CategoriesDropdown>
  // );
}

{
  /* <Flex px={"xl"} justify="center" gap={"xl"} className={classes.wrapper}>
{mockCategories.map((category) => (
  <HoverCard
    classNames={{ dropdown: classes.dropdown }}
    key={category}
    shadow="md"
  >
    <HoverCard.Target>
      <Anchor className={classes.link} fz={"sm"} key={category}>
        {category}
      </Anchor>
    </HoverCard.Target>
    <HoverCard.Dropdown>
      <Text size="sm">
        Hover card is revealed when user hovers over target element, it
        will be hidden once mouse is not over both target and dropdown
        elements
      </Text>
    </HoverCard.Dropdown>
  </HoverCard>
))}
</Flex> */
}
