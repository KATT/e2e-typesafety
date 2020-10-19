import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { NormalizedCacheObject } from '@apollo/client';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import React from 'react';
import { getApolloClient } from '../withApollo';
export async function getServerPageViewer<T extends true | false>(options: Omit<Apollo.QueryOptions<Types.ViewerQueryQueryVariables>, 'query'>, ctx?: any
  , rawQueryResult?: T): Promise<{ props: T extends true ? Apollo.ApolloQueryResult<Types.ViewerQueryQuery> : { apolloState: NormalizedCacheObject } }> {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.ViewerQueryQuery>({ ...options, query: Operations.ViewerQueryDocument });
  if (rawQueryResult) {
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
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.ViewerQueryQuery, Types.ViewerQueryQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.ViewerQueryDocument, options);
};
export type PageViewerComp = React.FC<{ data?: Types.ViewerQueryQuery, error?: Apollo.ApolloError }>;
export const withPageViewer = (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.ViewerQueryQuery, Types.ViewerQueryQueryVariables>) => (WrappedComponent: PageViewerComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.ViewerQueryDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />;

};
export const ssrViewer = {
  getServerPage: getServerPageViewer,
  withPage: withPageViewer,
  usePage: useViewer,
}