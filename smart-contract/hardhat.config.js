require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path : ".env"});
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337
    },
    goerli: {
      url: "",
      accounts: ["fbd8a3a39b30d94d759b668397c850b25f0e373a7fdc43e1c7b6039ee608fe53"]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};