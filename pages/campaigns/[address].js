import React from 'react'
import { Card, Grid } from 'semantic-ui-react';
import ContributeForm from '../../components/ContributeForm';

import Campaign from '../../ethereum/campaign'
import web3 from '../../ethereum/web3';

const showCampaign = ({ contractAddress, minimumContribution, balance, requestsCount, approversCount, managerAddress }) => {
  const items = [
    {
      header: managerAddress,
      meta: "Address of Manager",
      description: "Manager created this campaign and can create requests to withdraw money",
      style: { overflowWrap: "break-word" }
    }, {
      header: minimumContribution,
      meta: "Minimum Contribution (ether)",
      description:
        "You must contribute at least this amount of ETH to become an approver",
    },
    {
      header: requestsCount,
      meta: "Number of Requests",
      description:
        "A request tries to withdraw money from the contract. Requests must be approved by approvers.",
    },
    {
      header: approversCount,
      meta: "Number of Approvers",
      description:
        "Number of people who have already donated to this campaign.",
    },
    {
      header: web3.utils.fromWei(balance, "ether"),
      meta: "Campaign Balance (ether)",
      description:
        "The balance is how much money this campaign has left to spend.",
    },
  ];

  return (
    <>
      <h2>ShowCampaign Page</h2>
      <p>contract address : {contractAddress}</p>

      <Grid>
        <Grid.Column width={12}>
          <Card.Group items={items} />
        </Grid.Column>
        <Grid.Column width={4}>
          <ContributeForm address={contractAddress} />
        </Grid.Column>
      </Grid>
    </>
  )
};

export async function getServerSideProps(context) {
  const { address } = context.query;

  const campaign = Campaign(address);
  const jsonSummary = await campaign.methods.getSummary().call();
  const summary = JSON.parse(JSON.stringify(jsonSummary));

  return {
    props: {
      contractAddress: address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      managerAddress: summary[4],
    }
  };
}

export default showCampaign