import { Loader, Stack, Text } from "@mantine/core";
import classes from "./LoginPage.module.css";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/remix";

export function LoginPage() {
  return (
    <div className={classes.wrapper}>
      <ClerkLoading>
        <Stack justify="center" align="center">
          <Text fw={600}>Loading</Text>
          <Loader color="blue" />
        </Stack>
      </ClerkLoading>
      <ClerkLoaded>
        <SignIn />
      </ClerkLoaded>
      {/* <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Swapp!
        </Title>

        <Group justify="center" mb="md" mt="md">
          <AuthProviderButton
            logoSrc="/logos/google_logo.png"
            size="lg"
            radius="xl"
            onClick={() => {}}
          />
          <AuthProviderButton
            logoSrc="/logos/facebook_logo.png"
            size="lg"
            radius="xl"
            onClick={() => {}}
          />
          <AppleAuthButton />
   
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />
        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor<"a"> href="/signup" fw={700}>
            Register
          </Anchor>
        </Text>
      </Paper> */}
    </div>
  );
}
