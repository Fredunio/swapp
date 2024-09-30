import { Container, Group, Anchor } from "@mantine/core";
import classes from "./AppFooter.module.css";
import AppLogo from "~/components/AppLogo/AppLogo";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
];

export function AppFooter() {
  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <AppLogo fz={"h3"} />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
