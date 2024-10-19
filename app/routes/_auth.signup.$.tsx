import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
import { SignupPage } from "~/components/Pages/SignupPage/SignupPage";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (userId) {
    return redirect("/");
  }
  return {};
};
export default function Signup() {
  return <SignupPage />;
}
