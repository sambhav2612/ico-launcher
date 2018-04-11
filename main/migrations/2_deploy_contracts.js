var BlockchainDevsToken = artifacts.require("./BlockchainDevsToken.sol");

module.exports = function(deployer) {
    deployer.deploy(BlockchainDevsToken);
};