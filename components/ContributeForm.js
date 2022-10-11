import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';

import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

const ContributeForm = ({ address }) => {
  const [minimumContribution, setMinimumContribution] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const campaign = await Campaign(address);

    try {
      const account = await web3.eth.getAccounts();

      await campaign.methods.contribute()
        .send({
          from: account[0],
          value: web3.utils.toWei(minimumContribution, "ether")
        });
      setMinimumContribution(0)
      router.replace(`/campaigns/${address}`);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Amount to Contribution</label>
          <Input
            label="Ether"
            labelPosition="right"
            value={minimumContribution}
            onChange={(event) => setMinimumContribution(event.target.value)}
          />
        </Form.Field>

        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={loading}>Donate!</Button>
      </Form>
    </div>
  )
}

export default ContributeForm