import { getSdk } from "~/graphql/generated";
import { GraphQLClient } from "graphql-request";

const AdminSdk = getSdk(
  new GraphQLClient(process.env.GRAPHQL_ENDPOINT!, {
    headers: {
      "x-hasura-role": "admin",
      "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET!,
      Authorization: `Bearer ${process.env.HASURA_GRAPHQL_JWT_SECRET}`,
    },
  })
);

const AnonymousUserSdk = getSdk(
  new GraphQLClient(process.env.GRAPHQL_ENDPOINT!, {
    headers: {
      "x-hasura-role": "user",
    },
  })
);

function getSdkWithToken(token: string) {
  return getSdk(
    new GraphQLClient(process.env.GRAPHQL_ENDPOINT!, {
      headers: {
        "x-hasura-role": "user",
        Authorization: `Bearer ${token}`,
      },
    })
  );
}

export { AdminSdk, AnonymousUserSdk, getSdkWithToken };
