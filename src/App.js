import React, { useState } from "react";
import { connectWallet } from "./components/Freighter";
import { donateToContract } from "./contract";
import "./App.css";

function App() {
  const [publicKey, setPublicKey] = useState(null);
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  // const goal = 10;

  const handleConnect = async () => {
    try {
      const key = await connectWallet();
      setPublicKey(key);
      setStatus("Wallet Connected: " + key);
    } catch (err) {
      setStatus(err.message);
    }
  };

  const handleDonate = async () => {
    try {
      if (!publicKey) throw new Error("Wallet not connected");
      if (amount <= 0) throw new Error("Invalid amount");

      setStatus("⏳ Transaction Pending...");

      const hash = await donateToContract(
        Number(amount) * 10000000,
        publicKey
      );

      setStatus("✅ Success! Tx Hash: " + hash);
    }catch (err) {
  console.log("Full Error:", err);

  if (err?.message) {
    setStatus("❌ " + err.message);
  } else {
    setStatus("❌ Transaction failed. Check console.");
  }
}
  };

  return (
    <div className="App">
      <h1>Stellar Crowdfunding</h1>

      <h3>Select Wallet</h3>

<div style={{ marginBottom: "15px" }}>
  <button onClick={handleConnect}>
    Connect Freighter
  </button>

  <button style={{ marginLeft: "10px" }} disabled>
    Connect Albedo (Coming Soon)
  </button>
</div>

<p>{publicKey}</p>

      <hr />

      <h3>Donate XLM</h3>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDonate}>Donate</button>

      <p>{status}</p>
    </div>
  );
}

export default App;