const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // deployed contract
  const DIDRegistry = await ethers.getContractFactory("DIDRegistry");
  const did = DIDRegistry.attach(contractAddress);

  const [alice, bob] = await ethers.getSigners();

  // Alice
  const existsAlice = await did.identityExists(alice.address);
  if (!existsAlice) {
    const tx1 = await did.connect(alice).createIdentity("Alice", "alice@example.com", "PublicKey123");
    await tx1.wait();
    console.log("✅ Alice created:", alice.address);
  }

  // Bob
  const existsBob = await did.identityExists(bob.address);
  if (!existsBob) {
    const tx2 = await did.connect(bob).createIdentity("Bob", "bob@example.com", "PublicKey456");
    await tx2.wait();
    console.log("✅ Bob created:", bob.address);
  }

  // View Bob’s identity
  const bobIdentity = await did.connect(bob).getMyIdentity();
  console.log("👤 Bob’s Identity:", bobIdentity);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
