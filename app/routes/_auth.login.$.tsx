import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
import { LoginPage } from "~/components/Pages/LoginPage/LoginPage";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (userId) {
    return redirect("/");
  }
  return {};
};
export default function Login() {
  return <LoginPage />;
}
