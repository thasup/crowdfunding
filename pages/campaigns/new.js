import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';

import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

const newCampaign = () => {
  const [minimumContribution, setMinimumContribution] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const convertedToWei = web3.utils.toWei(minimumContribution, "ether");

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(convertedToWei)
        .send({
          from: accounts[0]
        });
      setMinimumContribution(0);
      router.push("/");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link href="/">
        Back
      </Link>

      <h2>Create a New Campaign!</h2>

      <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="Ether"
            labelPosition="right"
            value={minimumContribution}
            onChange={(event) => setMinimumContribution(event.target.value)}
          />
        </Form.Field>

        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={loading}>Create!</Button>
      </Form>
    </div>
  )
};

export default newCampaign