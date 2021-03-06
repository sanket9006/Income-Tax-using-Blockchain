var Tax = artifacts.require("Tax");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Tax);
  console.log("deployed!");
};

{
  "Main": {
    "NetworkName": "Ethereum",
    "ChainId": 5,
    "RPC": "https://goerli.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc",
    "DaggerEndpoint": "wss://goerli.dagger.matic.network",
    "WatcherAPI": "https://mumbai-watcher.api.matic.today/api/v1",
    "StakingAPI": "https://mumbai-watcher.api.matic.today/api/v1",
    "Explorer": "https://goerli.etherscan.io",
    "Contracts": {
      "BytesLib": "0xde5807d201788dB32C38a6CE0F11d31b1aeB822a",
      "Common": "0x84Dc17F28658Bc74125C7E82299992429ED34c12",
      "ECVerify": "0xccd1d8d16F462f9d281024CBD3eF52BADB10131C",
      "Merkle": "0xCD87Be2Df3de01EA23666c97104613ec252300E8",
      "MerklePatriciaProof": "0x3a0Db8fa2805DEcd49cCAa839DaC15455498EDE2",
      "PriorityQueue": "0xD26361204b8e4a4bb16668bfE7A1b9106AD17140",
      "RLPEncode": "0xDE0D18799a20f29d9618f8DDbf4c2b029FAdc491",
      "RLPReader": "0xA5e463c187E53da5b193E2beBca702e9fEeA3738",
      "SafeMath": "0x1bEb355BE0577E61870C4c57DAaa6e2129dd0604",
      "Governance": "0x03Ac67D03A06571A059F20425FFD1BEa300d98C2",
      "GovernanceProxy": "0xAcdEADEE4c054A86F5b1e8705126b30Ec999899B",
      "Registry": "0xeE11713Fe713b2BfF2942452517483654078154D",
      "RootChain": "0xCe29AEdCdBeef0b05066316013253beACa7A6268",
      "RootChainProxy": "0x2890bA17EfE978480615e330ecB65333b880928e",
      "ValidatorShareFactory": "0x5737AD9095AB4d55FeE7F972ea7F86734695E3c1",
      "StakingInfo": "0x29C40836C17f22d16a7fE953Fb25DA670C96d69E",
      "StakingNFT": "0x532c7020E0F3666f9440B8B9d899A9763BCc5dB7",
      "StakeManager": "0xb8326Aad642a6bF95163687C4483B1aF965ce557",
      "StakeManagerProxy": "0x00200eA4Ee292E253E6Ca07dBA5EdC07c8Aa37A3",
      "SlashingManager": "0xDD17DE137c7Cc288E022fE95a3B398C94BDd5b83",
      "ValidatorShare": "0xfb20DB19E4b6EF5Ffd9af06F0E06a20D9BCf909b",
      "StateSender": "0xEAa852323826C71cd7920C3b4c007184234c3945",
      "DepositManager": "0x20339c5Ea91D680E681B9374Fc0a558D5b96a026",
      "DepositManagerProxy": "0x7850ec290A2e2F40B82Ed962eaf30591bb5f5C96",
      "WithdrawManager": "0x82A0Aafac8D34645f2c681a88b2874aeC8ac5d61",
      "ExitNFT": "0xE2Ab047326B38e4DDb6791551e8d593D30E02724",
      "WithdrawManagerProxy": "0x2923C8dD6Cdf6b2507ef91de74F1d5E0F11Eac53",
      "ERC20Predicate": "0x033a0A06dc6e78a518003C81B64f9CA80A55cb06",
      "ERC721Predicate": "0xDbBffd69Ef9F34bA8Fb8722157A51a4733992B35",
      "Tokens": {
        "MaticToken": "0x499d11E0b6eAC7c0593d8Fb292DCBbF815Fb29Ae",
        "TestToken": "0xb2eda8A855A4176B7f8758E0388b650BcB1828a4",
        "RootERC721": "0x0217B02596Dfe39385946f82Aab6A92509b7F352",
        "MaticWeth": "0x60D4dB9b534EF9260a88b0BED6c486fe13E604Fc"
      }
    }
  },
  "Matic": {
    "NetworkName": "Matic Testnet Mumbai",
    "ChainId": 80001,
    "RPC": "https://rpc-mumbai.matic.today",
    "DaggerEndpoint": "wss://mumbai-dagger.matic.today",
    "Explorer": "https://mumbai-explorer.matic.today",
    "Contracts": {
      "ChildChain": "0x1EDd419627Ef40736ec4f8ceffdE671a30803c5e",
      "Tokens": {
        "MaticWeth": "0x4DfAe612aaCB5b448C12A591cD0879bFa2e51d62",
        "MaticToken": "0x0000000000000000000000000000000000001010",
        "TestToken": "0xc7bb71b405ea25A9251a1ea060C2891b84BE1929",
        "RootERC721": "0xa38c6F7FEaB941160f32DA7Bbc8a4897b37876b5"
      }
    }
  },
  "Heimdall": {
    "ChainId": "heimdall-80001",
    "API": "https://heimdall.api.matic.today"
  }
}
