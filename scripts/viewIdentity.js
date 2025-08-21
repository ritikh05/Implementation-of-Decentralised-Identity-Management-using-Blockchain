const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // deployed contract address

  const DIDRegistry = await hre.ethers.getContractFactory("DIDRegistry");
  const did = DIDRegistry.attach(contractAddress);

  // Get identity of the default signer (account[0])
  const identity = await did.getMyIdentity();

  console.log("👤 My Identity:");
  console.log("Name:", identity[0]);
  console.log("Email:", identity[1]);
  console.log("Public Key:", identity[2]);
  console.log("Owner Address:", identity[3]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
