// sdk.ts
import { GraphQLClient } from 'graphql-request'
import { getSdkWithHooks } from '../__generated__/client'

const url = process.env.VERCEL_URL ?? 'http://localhost:3000'

export const sdk = getSdkWithHooks(
  new GraphQLClient(`${url}/api/graphql`, {
    cache: typeof window === 'object' ? 'default' : 'no-cache',
  })
)
