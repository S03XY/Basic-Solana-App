// solana minter api

export const connectToWallet = async () => {
  if (window.solana === undefined) {
    alert("Wallet not detected! Try installing phantom wallet");
    return null;
  } else {
    try {
      const resp = await window.solana.connect();
      const connected_user = resp.publicKey.toString();
      return connected_user;
    } catch {
      alert("Error in Connecting to wallet");
      return null  


    }
  }
};

export const disconnectFromWallet = async () => {
    window.solana.disconnect()

    


};
