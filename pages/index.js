import { Button, Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';

function HomePage({ campaigns }) {
  const items = campaigns.map((item) => {
    return {
      header: item,
      description: <a>View Campaign</a>,
      fluid: true,
    };
  });

  return (
    <>
      <div>Welcome to Next.js!</div>
      <h3>Open Campaigns</h3>
      <Button content="Create Campaign" icon="add circle" floated='right' primary />
      <Card.Group items={items} />
    </>
  )
}

export async function getServerSideProps() {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { props: { campaigns } };
}

export default HomePage