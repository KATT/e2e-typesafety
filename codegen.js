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
      ],
      config: {
        skipTypename: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        // nonOptionalTypename: false,
        scalars: {
          _text: 'string[]',
        },
      },
    },
    './apollo/__generated__/graphql.schema.json': {
      documents: ['./pages/**/*.{graphql,gql,tsx}'],
      plugins: ['introspection'],
    },
  },
};
