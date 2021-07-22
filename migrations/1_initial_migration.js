const MultiSigWallet = artifacts.require("MultiSigWallet");

module.exports = function (deployer) {
  deployer.deploy(MultiSigWallet,["0xB0606B70bEfa0fB3A9E6E933382192E5567B723a"],1);
};
