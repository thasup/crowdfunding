<!-- Add banner here -->

![Project Preview](https://www.dropbox.com/s/vtgtu3z9n1fgazh/CreativeFund-funding-platform-for-creative-projects.png?raw=1)

# CreativeFund

[![Netlify Status](https://api.netlify.com/api/v1/badges/2ebf1486-1baa-4827-af29-9584835addc4/deploy-status)](https://app.netlify.com/sites/thasup-creative-fund/deploys)

<!-- Describe your project in brief -->
A crowd funding dapp using the **Ethereum blockchain**, deployed on **Goerli test network** and built by **NextJS**.

# Table of contents

- [CreativeFund](#creativefund)
- [Table of contents](#table-of-contents)
- [Demo](#demo)
- [How to run the project](#how-to-run-the-project)
- [Setup ENV](#setup-env)
- [Highlight Dependencies](#highlight-dependencies)
- [Highlight Technology](#highlight-technology)
<!-- - [Features](#features) -->

# Demo

[(Back to top)](#table-of-contents)

[DEMO LINK](https://thasup-creativefund.vercel.app/)

<!-- # Features

[(Back to top)](#table-of-contents) -->

# How to run the project

[(Back to top)](#table-of-contents)

1. clone this repository on your computer
2. Install [metamask extension](https://metamask.io/) on browser and setup your wallet
3. Get some token from [Goerli faucet](https://goerlifaucet.com/) for cover the cost of transactions.
4. run command `npm install` to install all dependencies
5. setup [environment variables](#setup-env) in `.env.local` file
6. run command `npm run dev` to run the project
7. go to `http://localhost:3000/`

# Setup ENV

[(Back to top)](#table-of-contents)

**PRIVATE_KEY** : [How to get your private key from metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key)

**ALCHEMY_URL** : [How to get your Alchemy API key](https://docs.alchemy.com/docs/hello-world-smart-contract#step-2-create-your-app-and-api-key) (make sure to choose Goerli testnet in network end point)

**CONTRACT_ADDRESS** : you can get the contract address after deployed it on Goerli test network by run command
```
cd ethereum
node complie.js
node deploy.js
```

# Highlight Dependencies

[(Back to top)](#table-of-contents)

- `node` version 18.9.0
- `solc` version 0.4.17
- `web3` version 1.8.0
- `react` version 18.2.0
- `next` version 12.3.1
- `mocha` version 10.0.0
- `ganache cli` version 6.12.2

# Highlight Technology

[(Back to top)](#table-of-contents)

- Solidity
- Web3.js
- Alchemy API
- React.js
- Next.js
- Semantic UI
- Node.js
- Ganache CLI
- Mocha
