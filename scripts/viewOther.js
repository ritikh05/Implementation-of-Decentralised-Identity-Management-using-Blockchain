const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const DIDRegistry = await hre.ethers.getContractFactory("DIDRegistry");
  const did = DIDRegistry.attach(contractAddress);

  // change this to any account you want to inspect
  const target = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

  const [name, email, data, owner] = await did.getIdentity(target);
  console.log("👤 Identity of", target);
  console.log("Name:  ", name);
  console.log("Email: ", email);
  console.log("Data:  ", data);
  console.log("Owner: ", owner);
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
