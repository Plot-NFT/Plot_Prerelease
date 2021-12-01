import { useEthers, useEtherBalance } from "@usedapp/core";

const MetamaskButton = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();

  return (
    <>
      {!account && <button onClick={activateBrowserWallet}>Connect</button>}
      {account && <p>Account: {account}</p>}
      {account && <button onClick={deactivate}>Disconnect</button>}
    </>
  );
};

export default MetamaskButton;
