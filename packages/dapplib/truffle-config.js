require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember minor imitate prison forget stadium'; 
let testAccounts = [
"0xb2141ea09fb719a7e0ac300d2eca6e7db733e803733dbb1819f41a696bad249a",
"0xf76992ec5bae83e735c28b9ac127cb5c28f5295bb073847b6549b1320c5f9e98",
"0x403ecce10bb3d4b3e81db3cf117db25c6a818994528c8329e742806e54d5f9d0",
"0xbe19bb1fdcb553f481fde6e10efe656d6ecbcee9abae5132655adc422b344d07",
"0xbadbd866616f8629d6207b2f59a07ea7902f520063b1de594488fd6dcc8c78da",
"0x71cdc34d0ddff5faa87a8e8a63bddc101a2f8f452fda4e4800bbffc589dcf2dd",
"0xf471a8da7c95b7ea6bc48f3606bca779f31fd9d163b563ed0584606731cddc7f",
"0xd87afe6a9234a1ef3e7fa0124d5dff9958b5a5097c0d153c0c8103bbf2b26692",
"0x0e58eff9c09ca10d016dc2fcf61fd0cb29f2325bf1f27ec1c9d47a8b47e5ac20",
"0x2fde8e8d13050d3ef34526f7e69002e82d9f01c834f28ce6eeab1bf2b1421e84"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
