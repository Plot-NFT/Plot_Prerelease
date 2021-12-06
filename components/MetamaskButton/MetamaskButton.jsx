import * as React from "react";
import { useEthers } from "@usedapp/core";
import axios from "axios";
import styles from "./MetamaskButton.module.scss";

const MetamaskButton = ({ chainState }) => {
  const { activateBrowserWallet, account } = useEthers();
  const [chainId, setChainId] = chainState;

  const POLYGON_MUMBAI_PARAMS = {
    chainId: "0x13881",
    chainName: "Polygon Testnet Mumbai",
    nativeCurrency: {
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  };

  const addBlockchainNetwork = async () => {
    if (chainId !== "80001") {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [POLYGON_MUMBAI_PARAMS],
      });
    }
  };

  const isValidNetwork = () => {
    return chainId === "80001";
  };

  React.useEffect(() => {
    if (!chainId) {
      window.ethereum.on("chainChanged", function (networkId) {
        setChainId(networkId);
      });
    }

    if (account && !chainId) {
      setChainId(window.ethereum.networkVersion);

      console.log(account);
    }
  }, [account, chainId]);

  return (
    <div
      className={`${styles.wrapper} ${
        !account || !isValidNetwork() ? styles.notLogin : ""
      }`}
    >
      {!account && (
        <button
          className={styles.button}
          onClick={() => activateBrowserWallet()}
        >
          Connect Metamask
        </button>
      )}

      {account && !isValidNetwork() && (
        <button className={styles.button} onClick={addBlockchainNetwork}>
          Switch to Polygon Testnet Mumbai Network
        </button>
      )}

      {account && isValidNetwork() && (
        <div>
          <div>
            <h2> Hi {account}!</h2>

            <p className={styles.header}>
              You have been added to our whitelist!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetamaskButton;
