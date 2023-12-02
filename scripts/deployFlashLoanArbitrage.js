const hre = require("hardhat");

async function main() {
  const flashLoanArbitrage = await hre.ethers.deployContract("FlashLoanArbitrage",["0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"]);
  await flashLoanArbitrage.waitForDeployment();
  const flashLoanArbitrageAddress = await flashLoanArbitrage.getAddress();
  console.log("FlashLoanArbitrage deployed to:", flashLoanArbitrageAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
