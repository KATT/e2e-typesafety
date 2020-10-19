/* eslint-disable */
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
  viewer?: Maybe<Viewer>;
};

export type Viewer = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type ViewerQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQueryQuery = { viewer?: Maybe<Pick<Viewer, 'id' | 'name' | 'status'>> };
