import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';

import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";

const newRequest = ({ contractAddress }) => {
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const campaign = Campaign(contractAddress);

    try {
      const account = await web3.eth.getAccounts();

      await campaign.methods.createRequest(
        description,
        web3.utils.toWei(value, "ether"),
        recipient,
      )
        .send({
          from: account[0]
        });
      setValue(0);
      setDescription("");
      setRecipient("");
      router.push(`/campaigns/${contractAddress}/requests`);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link href={"/campaigns/[address]/requests"} as={`/campaigns/${contractAddress}/requests`}>
        Back
      </Link>

      <h2>Create a Request</h2>

      <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Description</label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Value in Ether</label>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Recipient</label>
          <Input
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </Form.Field>

        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={loading}>Create!</Button>
      </Form>
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

export default newRequest