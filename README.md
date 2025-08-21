# 🆔 Decentralized Identity Management (DID) using Blockchain  

This project demonstrates the implementation of a **Decentralized Identity Management System** on the Ethereum blockchain using **Solidity** and **Hardhat**.  

Users can:  
- ✅ Create their own decentralized identity (DID)  
- ✅ Update their identity  
- ✅ View their own identity  
- ✅ View other users’ identities by address  

---

## ⚡ Tech Stack  
- **Solidity (v0.8.x)**  
- **Hardhat**  
- **Ethers.js**  
- **Node.js**  

---

## 📂 Project Structure  

```
did-demo/
│── contracts/
│   └── DID.sol             # Smart contract
│── scripts/
│   ├── interact.js         # Create/update identity
│   ├── viewIdentity.js     # View your identity
│   └── viewOther.js        # View another user’s identity
│── hardhat.config.js       # Hardhat configuration
│── package.json
│── README.md               # Documentation
```

---

## 🚀 Setup & Installation  

1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/did-demo.git
   cd did-demo
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

3. **Start a local Hardhat blockchain**  
   ```sh
   npx hardhat node
   ```

4. **Deploy the contract** (in a new terminal)  
   ```sh
   npx hardhat run --network localhost scripts/deploy.js
   ```

   This will give you a **contract address** (e.g. `0x5fbdb2315678afecb367f032d93f642f64180aa3`).  
   Update this address in:  
   - `interact.js`  
   - `viewIdentity.js`  
   - `viewOther.js`  

---

## 🛠 Usage  

### 1. Create or Update Identity  
```sh
npx hardhat run --network localhost scripts/interact.js
```

### 2. View Your Identity  
```sh
npx hardhat run --network localhost scripts/viewIdentity.js
```

### 3. View Another User’s Identity  
```sh
npx hardhat run --network localhost scripts/viewOther.js
```

---

## 📜 Smart Contract Functions  

- `createIdentity(string name, string email, string data)` → Create new identity  
- `updateIdentity(string name, string email, string data)` → Update existing identity  
- `getMyIdentity()` → View caller’s identity  
- `getIdentity(address user)` → View identity of another user  
- `identityExists(address user)` → Check if an identity exists  

---

## ✅ Example Output  

```
🔑 Using account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
ℹ️ Identity exists? false
🚀 Creating identity...
✅ Identity created!
👤 My Identity:
Name:  Alice
Email: alice@example.com
Data:  PublicKey123
Owner: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
```

---

## 📌 Notes  
- This project is for **educational purposes** only.  
- Do not use the provided Hardhat private keys on the mainnet.  
- You can test multiple users by switching accounts in `hardhat.config.js` or using scripts.  

---

## 🤝 Contributing  
Pull requests are welcome!  

---

## 📄 License  
MIT License © 2025  
