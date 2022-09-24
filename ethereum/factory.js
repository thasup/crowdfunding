import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';

const deployedAddress = '0x9a7Ec0Da09F3437CfcC3f282289BA0CE9986Fd33';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  deployedAddress
);

export default instance;