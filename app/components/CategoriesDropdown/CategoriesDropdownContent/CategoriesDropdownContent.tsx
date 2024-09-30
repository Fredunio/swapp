import { Anchor, Flex, Image, Stack, Text } from "@mantine/core";

export default function CategoriesDropdownContent({
  name,
  firstSubheader,
  firstSubheaderLinks,
  secondSubheader,
  secondSubheaderLinks,
  bannerImage,
  bannerLink,
}: {
  name: string;
  firstSubheader: string;
  firstSubheaderLinks: string[];
  secondSubheader: string;
  secondSubheaderLinks: string[];
  bannerImage: string;
  bannerLink: string;
}) {
  return (
    <Flex>
      <Stack>
        <Text>{firstSubheader}</Text>
        <Stack>
          {firstSubheaderLinks.map((link) => (
            <Anchor key={link} href={link}>
              {link}
            </Anchor>
          ))}
        </Stack>
      </Stack>
      <Stack>
        <Text>{secondSubheader}</Text>
        <Stack>
          {secondSubheaderLinks.map((link) => (
            <Anchor key={link} href={link}>
              {link}
            </Anchor>
          ))}
        </Stack>
      </Stack>
      <Anchor href={bannerLink}>
        <Image src={bannerImage} alt={name} />
      </Anchor>
    </Flex>
  );
}
