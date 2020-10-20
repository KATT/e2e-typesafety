import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
export type ViewerQueryQueryResult = Apollo.QueryResult<ViewerQueryQuery, ViewerQueryQueryVariables>;