const Web3 = require('web3');
if(typeof web3!=='undefined'){
    web3 = new Web3(ethereum.currentProvider);
} else {
    web3 = new Web3(new Web3.provider('https://localhost:8545'))
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var Contract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "getInstructor",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_fName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setInstructor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]);

var Test = Contract.at('0xd9145CCE52D386f254917e481eB44e9943F39138')
console.log(Test)