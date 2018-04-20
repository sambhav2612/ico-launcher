'use strict';

var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

function newToken() {
    var ethAddress = window.document.getElementById('ethAddress').value;
    var tokenQuantity = window.document.getElementById('tokenQuantity').value;
    var tokenName = window.document.getElementById('tokenName').value;
    var tokenSymbol = window.document.getElementById('tokenSymbol').value;
    var decimals = window.document.getElementById('decimals').value;

    var tokenContract = web3.eth.contract(abi).at(address);

    return tokenContract.newToken(ethAddress, 
        tokenQuantity, 
        tokenName, 
        tokenSymbol, 
        decmimals, 
        function(error, result) {} );
}