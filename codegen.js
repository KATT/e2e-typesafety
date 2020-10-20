module.exports = {
  overwrite: true,
  schema: './__generated__/schema.graphql',
  documents: 'pages/**/*.{graphql,tsx,ts}',
  generates: {
    'apollo/__generated__/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        reactApolloVersion: 3,
        withHooks: false,
        withHOC: false,
        withComponent: false,
        exportFragmentSpreadSubTypes: true,
        documentMode: 'graphQLTag',
      },
    },
    'apollo/__generated__/page.tsx': {
      config: {
        documentMode: 'external',
        importDocumentNodeExternallyFrom: './graphql',
        reactApolloVersion: 3,
        withHooks: true,
        apolloClientInstanceImport: '../withApollo',
      },
      preset: 'import-types',
      presetConfig: {
        typesPath: './graphql',
      },
      plugins: ['graphql-codegen-apollo-next-ssr'],
    },
  },
};
