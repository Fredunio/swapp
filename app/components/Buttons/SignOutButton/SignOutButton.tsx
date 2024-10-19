import { SignOutButton as ClerkSignOutButton } from "@clerk/remix";
import { Button } from "@mantine/core";

export default function SignOutButton() {
  return (
    <ClerkSignOutButton>
      <Button w={"100%"}>Sign Out</Button>
    </ClerkSignOutButton>
  );
}
