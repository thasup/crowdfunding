import Link from 'next/link'
import React from 'react'
import { Button } from 'semantic-ui-react'

const requestsDetail = ({ contractAddress }) => {
  return (
    <div>
      <h2>Request List</h2>
      <Link href={"/campaigns/[address]/requests/new"} as={`/campaigns/${contractAddress}/requests/new`}>
        <Button primary>Add Request</Button>
      </Link>
    </div>
  )
};

export async function getServerSideProps(context) {
  const { address } = context.query;

  return {
    props: {
      contractAddress: address,
    }
  };
}

export default requestsDetail