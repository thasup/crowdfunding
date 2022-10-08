import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';

const deployedAddress = '0xD8A60A28D93e2e7F93af269075fF8a9d53812483';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  deployedAddress
);

export default instance;