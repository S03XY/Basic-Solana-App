import React from "react";
import "./App.css";
import * as api from "../api/solana-minter";

export const App = () => {
  const [user, setUser] = React.useState("");

  const onHandleConnect = async () => {
    let connected_user = await api.connectToWallet();
    setUser(connected_user);
  };
  const onHandleDisconnect = () => {
    api.disconnectFromWallet();
  };

  return (
    <>
      <h1>Solana NFT Minter</h1>
      <button onClick={onHandleConnect}>
        {user !== null ? "connected" : "connect"}
      </button>
      <button onClick={onHandleDisconnect}>Disconnect</button>
    </>
  );
};
