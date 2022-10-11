import Link from 'next/link'
import { Button, Table } from 'semantic-ui-react'

import Campaign from "../../../../ethereum/campaign"
import { RequestRow } from "../../../../components/RequestRow";

const { Header, Row, HeaderCell, Body } = Table;

const requestsDetail = ({ contractAddress, requestsCount, requests, approversCount }) => {
  const renderRows = () =>
    requests.map((request, index) => {
      return (
        <RequestRow
          request={request}
          key={index}
          id={index}
          address={contractAddress}
          approversCount={approversCount}
        />
      );
    });

  return (
    <div>
      <Link href={"/campaigns/[address]"} as={`/campaigns/${contractAddress}`}>
        Back
      </Link>

      <h2>Request List</h2>
      <Link href={"/campaigns/[address]/requests/new"} as={`/campaigns/${contractAddress}/requests/new`}>
        <Button primary floated="right" style={{ marginBottom: "10px" }}>Add Request</Button>
      </Link>

      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{renderRows()}</Body>
      </Table>

      <div>Found {requestsCount} requests</div>
    </div>
  )
};

export async function getServerSideProps(context) {
  const { address } = context.query;

  const campaign = await Campaign(address);
  const requestsCount = await campaign.methods.getRequestsCount().call();
  const approversCount = await campaign.methods.approversCount().call();

  const jsonRequests = await Promise.all(
    Array(parseInt(requestsCount)).fill().map((element, index) => {
      return campaign.methods.requests(index).call()
    })
  );
  const requests = JSON.parse(JSON.stringify(jsonRequests));

  const sanitizedRequests = requests.map(
    ({ description, value, recipient, complete, approvalCount }) => {
      return { description, value, recipient, complete, approvalCount };
    }
  );

  return {
    props: {
      contractAddress: address,
      requestsCount: sanitizedRequests.length || 0,
      approversCount,
      requests: sanitizedRequests || [],
    }
  };
}

export default requestsDetail