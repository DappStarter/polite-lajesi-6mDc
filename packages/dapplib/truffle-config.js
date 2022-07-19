require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan renew mad erosion inflict end army gift'; 
let testAccounts = [
"0x19b862e9e2f8d77b409911f89f27e7c4ca92d355737f563f6b62d529c0c54849",
"0x6c8aac5e386a7fd9afeb3f31cce8c41423539059a9a2b455e94194f2ac9bbbff",
"0xd92a8b523a093afc17b41851da0f1e93a199713cd7b2e9101fba8a1cf3e840f7",
"0x59a989c2c3a45c7c72d2db4cb4dc5b6f05d4795f5bad8113cbc912a99048f782",
"0xefa37d09a9da70302e91561de3db6d82552fbf58a4189d58c0e6b0fc0c75a347",
"0x40906af0af0d13e775cd4da88aa79aa384efb33048a73156a5f3444d27d61c34",
"0x0ae8e301e32fe085892e0fb4535d8d7c85c6a658b37bd96af6e6ced1b179f136",
"0xe9050a756519b2d8c9602eb9a01196961a68151c13fdfc328e593ad17772e598",
"0x495ec328e2e328eaa775c5034a0e20b771a95387f9bbe30f7faf5d157834509c",
"0x46a6784b319d084782ad24c92a8dcb2cdd647160ec1ce104a154ae4af22bda1a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

