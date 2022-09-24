import factory from '../ethereum/factory';

function HomePage({ campaigns }) {
  return (<>
    <div>Welcome to Next.js!</div>
    <div>First campaign : {campaigns[0]}</div>
  </>)
}

export async function getServerSideProps() {
  const campaigns = await factory.methods.getDeployedCampaigns().call();

  return { props: { campaigns } };
}

export default HomePage