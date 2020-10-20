module.exports = {
  schema: './__generated__/schema.graphql',
  overwrite: true,
  generates: {
    './__generated__/client.ts': {
      documents: ['./pages/**/*.{graphql,gql,tsx}'],
      plugins: [
        'typescript',
        'typescript-operations',
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
        'typescript-graphql-request',
        'plugin-typescript-swr'
      ],
      config: {
      },
    },
  },
};
