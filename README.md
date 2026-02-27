# 🚀 Stellar Crowdfunding dApp

A decentralized crowdfunding application built using **Soroban Smart Contracts** on the **Stellar Testnet**.

Users can connect their wallet, donate XLM to a campaign, and view transaction status in real time.

---

## 📌 Project Features

- 🔌 Multi-wallet UI (Freighter supported)
- 🪙 Donate XLM to smart contract
- 📜 Deployed Soroban smart contract on Testnet
- 🔍 Transaction hash displayed after donation
- ⚠️ 3 types of error handling implemented
- 📡 Connected to Stellar Testnet RPC
- 💻 Frontend built with React
- 🔗 Real blockchain interaction

---

## 🔌 Wallet Options Available

This dApp provides wallet connection options:

- ✅ **Freighter Wallet (Testnet)**
- ⏳ **Albedo (UI Option)**

## 📸 Screenshot

<img width="884" height="167" alt="Screenshot 2026-02-27 184458" src="https://github.com/user-attachments/assets/b5808e43-9ade-42af-aa6d-bb850d74f3c9" />

The screenshot clearly shows:

Connect Wallet button

Wallet selection options

Connected wallet address

## 📜 Smart Contract Details

Network: Stellar Testnet

Platform: Soroban

 ## 🔐 Contract Address
CC26KWGQOXVIG55D7A3RLBLXYO3GVG3H5I5RVNZYCABOYSG4HB7ZTBOD

## 🔎 Verify on Stellar Explorer:
https://stellar.expert/explorer/testnet

## 🔗 Verified Transaction

Below is a sample donation transaction made through the frontend.

## 🧾 Transaction Hash
e046c94800489df39a328b1083d76dc3f14043c7da02cbbc16bfdbf3320108b5
## 🔍 Explorer Link

https://stellar.expert/explorer/testnet/tx/e046c94800489df39a328b1083d76dc3f14043c7da02cbbc16bfdbf3320108b5

## ⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Install Dependencies
npm install
3️⃣ Run Development Server
npm start

## App runs at:

http://localhost:3000

## 🛠 Smart Contract Deployment
🔨 Build Contract
soroban contract build
🚀 Deploy to Testnet
soroban contract deploy --wasm target/wasm32v1-none/release/hello_world.wasm --source your_identity --network testnet
🔄 Initialize Contract
soroban contract invoke --id YOUR_CONTRACT_ID --source your_identity --network testnet -- initialize --owner YOUR_WALLET_ADDRESS --goal 100000000

## ⚠️ Error Handling Implemented

This project handles the following error types:

❌ Wallet not connected

❌ Invalid donation amount (≤ 0)

❌ Transaction failure or network mismatch

## 🧠 Architecture Overview
User Wallet (Freighter)
        ↓
Frontend (React)
        ↓
Soroban Smart Contract
        ↓
Stellar Testnet

## 📦 Technologies Used

Stellar SDK

Soroban Smart Contracts

React JS

Freighter Wallet API

Stellar Testnet RPC
