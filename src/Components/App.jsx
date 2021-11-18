import React from "react";
import "./App.css";
import * as api from "../api/solana-minter";

export const App = () => {
  const onHandleConnect = async () => {
    let connected_user = await api.connectToWallet();
  };
  const onHandleDisconnect = () => {
    api.disconnectFromWallet();
  };

  return (
    <>
      <h1>Solana NFT Minter</h1>
      <button onClick={onHandleConnect}>Connect</button>
      <button onClick={onHandleDisconnect}>Disconnect</button>
    </>
  );
};
