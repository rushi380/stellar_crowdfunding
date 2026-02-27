README
Stellar Wallet History (Freighter)

A small React demo that connects to a Freighter wallet and displays the connected account’s XLM balance along with recent transaction history on the Stellar Testnet.

🚀 Quick start
Prerequisites

Node.js (recommended v16+)

Freighter browser extension (installed and set to Testnet)

Install and run
npm install
npm start

The development server runs at:

http://localhost:3000
✨ Features

Connect with Freighter wallet

Disconnect wallet functionality

Display connected public key (truncated format)

Fetch and show XLM balance

Transaction History Viewer — fetches recent transactions from Horizon (Testnet)

Clean and responsive UI

Proper error handling

📁 Key files

src/components/Freighter.js — Freighter helpers and Horizon Testnet server setup

src/components/Header.js — Wallet connect/disconnect and balance display

src/components/TransactionHistory.js — Fetches and renders recent transactions

📸 Screenshots
Wallet Connected State
<p align="center"> <img src="screenshots/app-ui.png" width="800"/> </p>

Displays:

Connected public key

XLM balance

Recent transaction history

Testnet Transaction Example
<p align="center"> <img src="screenshots/testnet-transaction.png" width="800"/> </p>

Example of a transaction confirmed on the Stellar Testnet explorer.

✅ Tests & Build

Run tests:

npm test

Create production build:

npm run build
🔒 Notes

This application uses the Stellar Testnet Horizon endpoint.

Freighter manages private keys and signing securely in the browser.

The application never stores or exposes private keys.

All blockchain data is fetched directly from the Stellar Horizon API.