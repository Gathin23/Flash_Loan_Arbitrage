const hre = require("hardhat");

async function main() {
  const flashLoan = await hre.ethers.deployContract("FlashLoan",["0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"]);
  await flashLoan.waitForDeployment();
  const flashLoanAddress = await flashLoan.getAddress();
  console.log("FlashLoan deployed to:", flashLoanAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
