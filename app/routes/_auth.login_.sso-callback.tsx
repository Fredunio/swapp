import { AuthenticateWithRedirectCallback } from "@clerk/remix";

export default function SSOCallbackPage() {
  return <AuthenticateWithRedirectCallback />;
}
