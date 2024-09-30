import type { MetaFunction } from "@remix-run/node";
import HomePage from "~/components/Pages/HomePage/HomePage";

export const meta: MetaFunction = () => {
  return [
    { title: "Swapp" },
    { name: "description", content: "Welcome to Swapp!" },
  ];
};

export default function Index() {
  return <HomePage />;
}
