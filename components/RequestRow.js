import { useRouter } from 'next/router';
import { Table, Button } from "semantic-ui-react";

import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

const { Row, Cell } = Table;

export const RequestRow = ({ request, id, address, approversCount }) => {
  const { description, value, recipient, complete, approvalCount } = request;

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleApproveRequest = async () => {
    setLoading(true);

    const accounts = await web3.eth.getAccounts();
    const campaign = await Campaign(address);

    try {
      await campaign.methods.approveRequest(id).send({
        from: accounts[0],
      });
      router.replace(`/campaigns/${address}/requests`);
    } catch (error) {
      // TODO: handle error
    } finally {
      setLoading(false);
    }
  };

  const handleFinalize = async () => {
    setLoading(true);

    const accounts = await web3.eth.getAccounts();
    const campaign = await Campaign(address);

    try {
      await campaign.methods.finalizeRequest(id).send({
        from: accounts[0],
      });
      router.replace(`/campaigns/${address}/requests`);
    } catch (error) {
      // TODO: handle error
    } finally {
      setLoading(false);
    }
  };

  const readyToFinalize = !complete && approvalCount >= approversCount / 2;

  return (
    <Row disabled={complete} positive={readyToFinalize}>
      <Cell>{id}</Cell>
      <Cell>{description}</Cell>
      <Cell>{web3.utils.fromWei(value, "ether")}</Cell>
      <Cell>{recipient}</Cell>
      <Cell>{`${approvalCount}/${approversCount}`}</Cell>
      <Cell>
        {!complete ? (
          <Button onClick={handleApproveRequest} color="green" loading={loading} basic>
            Approve
          </Button>
        ) : (
          <p>Approved</p>
        )}
      </Cell>
      <Cell>
        {readyToFinalize && (
          <Button onClick={handleFinalize} color="teal" loading={loading} basic>
            Finalize
          </Button>
        )}
      </Cell>
    </Row>
  );
};