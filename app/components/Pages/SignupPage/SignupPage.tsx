import classes from "./SignupPage.module.css";
import { SignUp } from "@clerk/remix";

export function SignupPage() {
  return (
    <div className={classes.wrapper}>
      <SignUp />
      {/* <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome to Swapp!
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
        <Flex mt="md" mb="md" gap="md">
          <TextInput
            style={{
              width: "full",
            }}
            label="First name"
            placeholder="John"
            size="md"
          />
          <TextInput
            style={{
              width: "full",
            }}
            label="Last name"
            placeholder="Doe"
            size="md"
          />
        </Flex>
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
        <Button fullWidth mt="xl" size="md">
          Sign Up
        </Button>

        <Text ta="center" mt="md">
          Already have an account?{" "}
          <Anchor<"a"> href="/login" fw={700}>
            Login
          </Anchor>
        </Text>
      </Paper> */}
    </div>
  );
}
