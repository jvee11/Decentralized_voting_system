# 🗳️ Decentralized Voting DApp

A simple decentralized voting application built on Ethereum using Solidity smart contracts and a web frontend with JavaScript and Ethers.js. Users can connect their MetaMask wallet, view candidates, vote, and track the status of the election in real-time.

# 🚀 Features
1) Connect MetaMask wallet

2) Add candidates (only in contract constructor or by extending)

3) View list of candidates and their vote counts

4) Vote for a candidate

5) View voting status and remaining time

6) Interact with Ethereum smart contract via Ethers.js

# 🧱 Tech Stack
Frontend: HTML, CSS, JavaScript, Ethers.js

Blockchain: Solidity, Ethereum

Smart Contract Tooling: Remix IDE / Truffle (if used)

Wallet: MetaMask

# 🔧 Setup Instructions
1. Install MetaMask
Install MetaMask extension in your browser from MetaMask.io.
Create an account and connect to a test network like Goerli

2. Deploy Smart Contract
You can use Remix IDE:

Copy Voting.sol into Remix

Compile and deploy on an Ethereum test network

Copy the deployed contract address and ABI

3. Update JavaScript Files
In contract.js:

js
Copy
Edit
let contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";
let contractAbi = [...]; // Replace with ABI from Remix
4. Run Frontend
Simply open index.html in your browser

Click “Connect MetaMask” to interact with the blockchain

# 📷 Screenshots
Add screenshots of the UI here

# ❗ Notes
Users must be connected to the same network where the contract is deployed

Ensure the candidate index passed while voting is correct

Error handling is basic and can be enhanced

# 📜 License
MIT

