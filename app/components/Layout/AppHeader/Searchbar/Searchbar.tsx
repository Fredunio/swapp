import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function Searchbar() {
  return (
    <TextInput
      w={"100%"}
      radius={"xl"}
      placeholder="Search for items"
      leftSection={<IconSearch style={{ width: 20, height: 20 }} />}
    />
  );
}
