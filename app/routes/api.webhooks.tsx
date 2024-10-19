import { WebhookEvent } from "@clerk/remix/ssr.server";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Webhook } from "svix";
import { AdminSdk } from "~/lib/api.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }
  // Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to infisical or .env or .env.local"
    );
  }

  // headers
  const headersPayload = request.headers;
  const svix_id = headersPayload.get("svix-id");
  const svix_timestamp = headersPayload.get("svix-timestamp");
  const svix_signature = headersPayload.get("svix-signature");

  // no headers -> error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // body
  const payload = await request.json();
  const body = JSON.stringify(payload);

  // New Svix instance with the secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  if (evt.type === "user.created") {
    console.log("userId:", evt.data.id);
    const adminSdk = AdminSdk;
    // TODO: Check if user exists in your database
    // TODO: Check if this works
    adminSdk.StoreUser({
      userObject: {
        ...evt.data,
      },
    });

    // TODO: Add user to your database
  }

  if (evt.type === "user.updated") {
    console.log("userId:", evt.data.id);

    const adminSdk = AdminSdk;
    adminSdk.UpdateStoredUser({
      userId: evt.data.id,
      userObject: {
        ...evt.data,
      },
    });
    // TODO: Update user in your database
  }

  return null;
};
