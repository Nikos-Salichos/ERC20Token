const dappToken = artifacts.require("../contracts/DappToken.sol");

module.exports = function (deployer) {
    deployer.deploy(dappToken);
};


//Terminal orders
// truffle migrate --reset
// Use the following syntax to assign return of promise to token --> DappToken.deployed().then(function(i) {token=i})
// token.address to get token address
// token.TotalSupply() to use a function
