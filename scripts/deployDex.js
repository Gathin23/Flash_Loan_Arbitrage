const hre = require("hardhat");

async function main() {
  const dex = await hre.ethers.deployContract("Dex");
  await dex.waitForDeployment();
  const dexAddress = await dex.getAddress();
  console.log("FlashLoan deployed to:", dexAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
