
let web3=require("web3");
var Contract = require('web3-eth-contract');

Contract.setProvider('https://ropsten.infura.io/v3/db250ebd2378401cad20df37e93a6450');
var address='0xa562C24B760b818250eD1100F8217DAE6b73Ae05'
var contract = new  Contract([
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "x",
        "type": "uint256"
      }
    ],
    "name": "number",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "pure",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "d",
        "type": "uint256[]"
      }
    ],
    "name": "total",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function",
    "constant": true
  }
],address);

// contract.methods.total([1,2,3]).call().then(console.log);
contract.methods.number(5).call().then(console.log);