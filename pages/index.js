import * as React from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Index = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();

  const detectProvider = () => {
    if (!window.ethereum) {
      alert(
        "Please install metamask to use Web3 Service, https://metamask.io/"
      );
    }
  };

  React.useEffect(() => {
    detectProvider();
  }, []);

  return (
    <div>
      {!account && <button onClick={activateBrowserWallet}>Connect</button>}
      {account && <p>Account: {account}</p>}
      {account && <button onClick={deactivate}>Disconnect</button>}
    </div>
  );
};

export default Index;
