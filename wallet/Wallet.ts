import {
  Connection,
  clusterApiUrl
} from "@solana/web3.js";

export class Wallet {
  connection = new Connection(
    clusterApiUrl("mainnet-beta")
  );

  async connect() {
    const provider =
      (window as any).solana;

    if (!provider) {
      throw new Error(
        "Phantom Wallet not found"
      );
    }

    const wallet =
      await provider.connect();

    return wallet.publicKey.toString();
  }
}
