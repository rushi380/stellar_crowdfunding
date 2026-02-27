import {
  SorobanRpc,
  TransactionBuilder,
  BASE_FEE,
  nativeToScVal,
  Contract,
  Networks
} from "stellar-sdk";

import { signTransaction } from "@stellar/freighter-api";

const CONTRACT_ID = "CC26KWGQOXVIG55D7A3RLBLXYO3GVG3H5I5RVNZYCABOYSG4HB7ZTBOD";

const server = new SorobanRpc.Server(
  "https://soroban-testnet.stellar.org"
);

export const donateToContract = async (amount, publicKey) => {

  if (!publicKey) throw new Error("Wallet not connected");
  if (amount <= 0) throw new Error("Invalid donation amount");

  const account = await server.getAccount(publicKey);

  const contract = new Contract(CONTRACT_ID);

  const tx = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,   // 🔥 THIS IS IMPORTANT
  })
    .addOperation(
      contract.call("donate", nativeToScVal(amount, { type: "i128" }))
    )
    .setTimeout(30)
    .build();
    console.log("TX NETWORK:", tx.networkPassphrase);

  const prepared = await server.prepareTransaction(tx);

  const signedXDR = await signTransaction(
    prepared.toXDR(),
    Networks.TESTNET   // 🔥 also here
  );

  const signedTx = TransactionBuilder.fromXDR(
    signedXDR,
    Networks.TESTNET   // 🔥 also here
  );

  const result = await server.sendTransaction(signedTx);

  return result.hash;
};