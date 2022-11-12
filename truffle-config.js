const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
	networks: {
		
		
	  },

	contracts_directory: './src/contracts/',
	contracts_build_directory: './src/abis/',

	compilers: {
		solc: {
			version: '0.8.9',
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	}
}