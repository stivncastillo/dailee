
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3001/graphql",
  documents: "src/lib/graphql/**/*.graphql",
  generates: {
    "src/lib/graphql/codegen/": {
      preset: "client",
      plugins: ['typescript', 'typescript-operations'],
      config: {
        flattenGeneratedTypes: true,
        scalars: {
          Date: "String",
        },
      },
      presetConfig: {
        fragmentMasking: false,
      },
    }
  }
};

export default config;
