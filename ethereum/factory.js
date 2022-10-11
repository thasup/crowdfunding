const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  process.env.CONTRACT_ADDRESS
);

export default instance;