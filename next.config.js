
module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    env: {
      ALCHEMY_URL: process.env.ALCHEMY_URL,
      PRIVATE_KEY: process.env.PRIVATE_KEY,
      CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
    },
  };
  return nextConfig;
};
