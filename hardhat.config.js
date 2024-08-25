require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x65163afb4a0cd32af2b14e4cc8316bbca02d5d15b59a49efeca17a03e89bda95"],
    },
  },
};
