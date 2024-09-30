import { Affix } from "@mantine/core";
import { Outlet } from "@remix-run/react";
import BackButton from "~/components/Buttons/BackButton/BackButton";

export default function AuthLayout() {
  return (
    <div className="relative">
      <Outlet />
      <Affix position={{ top: 10, left: 10 }}>
        <BackButton
          variant="default"
          size="xl"
          radius="xl"
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </Affix>
    </div>
  );
}
