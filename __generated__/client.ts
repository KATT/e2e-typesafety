/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
import useSWR, { ConfigInterface as SWRConfigInterface, keyInterface as SWRKeyInterface } from 'swr';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  viewer?: Maybe<Viewer>;
};

export type Viewer = {
  __typename?: 'Viewer';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type ViewerQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQueryQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'Viewer' }
    & Pick<Viewer, 'id' | 'name' | 'status'>
  )> }
);


export const ViewerQueryDocument = gql`
    query ViewerQuery {
  viewer {
    id
    name
    status
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ViewerQuery(variables?: ViewerQueryQueryVariables): Promise<ViewerQueryQuery> {
      return withWrapper(() => client.request<ViewerQueryQuery>(print(ViewerQueryDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useViewerQuery(key: SWRKeyInterface, variables?: ViewerQueryQueryVariables, config?: SWRConfigInterface<ViewerQueryQuery>) {
      return useSWR<ViewerQueryQuery>(key, () => sdk.ViewerQuery(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;