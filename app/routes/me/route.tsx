import { LoaderFunction } from "@remix-run/node";
import { json, Outlet, redirect, useLoaderData } from "@remix-run/react";
import { DashboardNavbar } from "./DashboardNavbar/DashboardNavbar";
import { getAuth } from "@clerk/remix/ssr.server";
import { Box } from "@mantine/core";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (userId) {
    return redirect("/login");
  }
  return json({ userId });
};

export default function UserDashboard() {
  const { userId } = useLoaderData<typeof loader>();

  return (
    // <div className="min-h-[var(--minPageContentHeight)] flex">
    <div className="min-h-[var(--minPageContentHeight)] flex">
      <DashboardNavbar />
      <Box className="grow flex justify-center px-44">
        <Box py={"lg"} className="w-full">
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}
