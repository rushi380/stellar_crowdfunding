import React, { useState } from "react";
import { checkConnection, retrievePublicKey, getBalance } from "./Freighter";

const Header = () => {

  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState("");
  const [balance, setBalance] = useState("0");

  const connectWallet = async () => {
    try {
      const allowed = await checkConnection();
      if (!allowed) return alert("Permission denied");

      const key = await retrievePublicKey();
      const bal = await getBalance();

      setPublicKey(key);
      setBalance(Number(bal).toFixed(2));
      setConnected(true);

    } catch (e) {
      console.error(e);
    }
  };

  const disconnectWallet = () => {
    setConnected(false);
    setPublicKey("");
    setBalance("0");
  };

  return (
    <div>
      <h2>Stellar Transaction Viewer</h2>
 <div className="wallet-info">
      {connected && (
        <>
       
          <p>
            {`${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`}
          </p>
          <p>Balance: {balance} XLM</p>

        </>
      )}

      {!connected ? (
        <button onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <button onClick={disconnectWallet}>
          Disconnect
        </button>
      )}
      </div>  
    </div>
  );
};

export default Header;