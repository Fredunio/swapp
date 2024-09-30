import { Box, TextInput } from "@mantine/core";
import DashboardSection from "~/components/DashboardSection/DashboardSection";

export default function DashboardAccount() {
  return (
    <DashboardSection title="Account" subtitle="Manage your account settings">
      <Box>
        <TextInput label="Username" placeholder="Enter your username" />
      </Box>
    </DashboardSection>
  );
}
