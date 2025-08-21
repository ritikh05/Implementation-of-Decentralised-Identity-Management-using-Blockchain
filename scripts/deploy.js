const hre = require("hardhat");

async function main() {
  const DIDRegistry = await hre.ethers.getContractFactory("DIDRegistry");
  const did = await DIDRegistry.deploy();

  // wait until deployment is complete
  await did.waitForDeployment();

  console.log("✅ DIDRegistry deployed to:", await did.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
