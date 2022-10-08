import React from 'react';
import { useState } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

const newCampaign = () => {
  const [minimumContribution, setMinimumContribution] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();

    const account = await web3.eth.getAccounts();
    await factory.methods.createCampaign(minimumContribution)
      .send({
        from: account[0]
      });
  }

  return (
    <div>
      <h1>New Campaign!</h1>

      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="Wei"
            labelPosition="right"
            value={minimumContribution}
            onChange={(event) => setMinimumContribution(event.target.value)}
          />
          <p>{minimumContribution}</p>
        </Form.Field>

        <Button primary>Create!</Button>
      </Form>
    </div>
  )
}

export default newCampaign