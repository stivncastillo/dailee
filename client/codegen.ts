import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3001/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "graphql/codegen/": {
      preset: "client",
      plugins: [],
      config: {
        flattenGeneratedTypes: true,
        scalars: {
          Date: "String",
        },
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
