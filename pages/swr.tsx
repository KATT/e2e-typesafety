import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { initializeApollo } from '../apollo/client'
import { sdk } from '../utils/sdk'

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`

export async function getServerSideProps() {
  const initialData = await sdk.ViewerQuery()
  
  return {
    props: {
      initialData,
    },
  }
}


type ThenArg<T> = T extends PromiseLike<infer U> ? U :
  T extends ((...args: any[]) => PromiseLike<infer V>) ? V :
  T
type Props = ThenArg<ReturnType<typeof getServerSideProps>>['props']


type FetchFunction<T> = () => Promise<{
  props: T;
}>;


const Index = ({initialData}: Props) => {
  const res = sdk.useViewerQuery('ViewerQuery', {}, {
    initialData
  })
  const {viewer} = res.data

  return (
    <div>
      You're signed in as {viewer.name} and you're {viewer.status} goto{' '}
      <Link href="/about">
        <a>static</a>
      </Link>{' '}
      page.
    </div>
  )
}


export default Index
