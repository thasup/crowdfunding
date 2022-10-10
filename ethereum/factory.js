import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  process.env.contractAddress
);

export default instance;