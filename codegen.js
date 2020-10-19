module.exports = {
  schema: './__generated__/schema.graphql',
  overwrite: true,
  generates: {
    './apollo/__generated__/graphql.tsx': {
      documents: ['./pages/**/*.{graphql,gql,tsx}'],
      plugins: [
        'typescript',
        'typescript-operations',
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
        'graphql-codegen-apollo-next-ssr',
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        reactApolloVersion: 3,
      },
    },
    './apollo/__generated__/graphql.schema.json': {
      documents: ['./pages/**/*.{graphql,gql,tsx}'],
      plugins: ['introspection'],
    },
  },
};
