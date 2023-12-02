# Simple Flash Loan Arbitrage
 Built a arbitrage between USDC and DAI with a custom Dex for the pair and used Aave-V3 for flashloans.

## Final output
![Screenshot_20231202_174056](https://github.com/Gathin23/Flash_Loan_Arbitrage/assets/94786511/320291e8-b9e8-4fe1-9d50-8f06da79f8cd)

[Link](https://sepolia.etherscan.io/tx/0x5ef68b13f794f5a2ffdab1a91879ff9acac8f5eccd766720830f31b8ab1cb177) 

## Note
Does not contain transaction executions or local testing.

## Use it only for deploying in sepolia testnet
```shell
npx hardhat run --network sepolia scripts/deployDex.js
npx hardhat run --network sepolia scripts/deployFlashLoanArbitrage.js
```
