import { isConnected, requestAccess } from "@stellar/freighter-api";

export const connectWallet = async () => {
  const connected = await isConnected();

  if (!connected) {
    throw new Error("Freighter wallet not installed");
  }

  const result = await requestAccess();

  // Extract only the address string
  return result.address;
};