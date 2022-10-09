import Link from 'next/link';
import { Button, Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';

function HomePage({ campaigns }) {
  const items = campaigns.map((item) => {
    return {
      header: item,
      description: <Link href={"/campaigns/[address]"} as={`/campaigns/${item}`}>View Campaign</Link>,
      fluid: true,
    };
  });

  return (
    <>
      <h2>Open Campaigns</h2>
      <Link href="/campaigns/new" passHref >
        <Button content="Create Campaign" icon="add circle" floated='right' primary />
      </Link>
      <Card.Group items={items} />
    </>
  )
}

export async function getServerSideProps() {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { props: { campaigns } };
}

export default HomePage