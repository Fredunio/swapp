import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    "https://swapp.hasura.app/v1/graphql": {
      headers: {
        "x-hasura-role": "admin",
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET!,
        Authorization: `Bearer ${process.env.HASURA_GRAPHQL_JWT_SECRET}`,
      },
    },
  },
  documents: "./app/**/*.graphql",
  generates: {
    "./app/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
