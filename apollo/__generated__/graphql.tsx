/* eslint-disable */
import gql from 'graphql-tag';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { NormalizedCacheObject } from '@apollo/client';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import React from 'react';
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
export async function getServerPageViewer<T extends true | false>(options: Omit<Apollo.QueryOptions<ViewerQueryQueryVariables>, 'query'>, apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
    , rawQueryResult?: T): Promise<{props: T extends true ? Apollo.ApolloQueryResult<ViewerQueryQuery> : {apolloState: NormalizedCacheObject} }>  {
        
        
        const data = await apolloClient.query<ViewerQueryQuery>({ ...options, query:Operations.ViewerQueryDocument });
        if(rawQueryResult){
          return {
             props: data,
          } as any;
        }
        const apolloState = apolloClient.cache.extract();
        return {
            props: {
                apolloState,
            },
        } as any;
        
        
      }
export const useViewer = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<ViewerQueryQuery, ViewerQueryQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ViewerQueryDocument, options);
};
export type PageViewerComp = React.FC<{data?: ViewerQueryQuery, error?: Apollo.ApolloError}>;
export const ssrViewer = {
      getServerPage: getServerPageViewer,
      
      usePage: useViewer,
    }