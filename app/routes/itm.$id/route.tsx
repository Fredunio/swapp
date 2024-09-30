import type { LoaderFunctionArgs } from "@remix-run/node";
import { Anchor, Box, Breadcrumbs, Flex, rem } from "@mantine/core";
import { json, useLoaderData } from "@remix-run/react";
import { IconTransferVertical } from "@tabler/icons-react";
import ItemPageDetails from "./ItemPageDetails/ItemPageDetails";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const itemId = params.id;
  return json({ itemId });
};

export default function ItemPage() {
  const { itemId } = useLoaderData<typeof loader>();

  const items = [
    { title: "Swapp", href: "#" },
    { title: "Search", href: "#" },
    { title: "Category", href: "#" },
    { title: "Item", href: "#" },
  ].map((item, index) => (
    <Anchor fz={"h6"} href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <Box
      px={{
        xs: 0,
        sm: rem(40),
        md: rem("120px"),
        lg: rem(160),
      }}
    >
      <Breadcrumbs px={{ base: "xs", sm: 0 }} className="mb-4">
        {items}
      </Breadcrumbs>
      <ItemPageDetails />
      <Flex py={20} className="w-full" justify="center" align="center">
        <IconTransferVertical width={30} height={30} />
      </Flex>
    </Box>
  );
}
