import * as React from "react";
import { useEthers } from "@usedapp/core";
import { useUser } from "../../context/userContext";

import styles from "./MetamaskButton.module.scss";

// eslint-disable-next-line react/prop-types
const MetamaskButton = ({ chainState }) => {
  const { activateBrowserWallet } = useEthers();
  const [chainId, setChainId] = chainState;
  const [user] = useUser();

  // const POLYGON_MUMBAI_PARAMS = {
  //   chainId: "0x13881",
  //   chainName: "Polygon Testnet Mumbai",
  //   nativeCurrency: {
  //     name: "Matic",
  //     symbol: "MATIC",
  //     decimals: 18,
  //   },
  //   rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
  //   blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  // };

  const detectProvider = () => {
    if (!window.ethereum) {
      return undefined;
    } else {
      return window.ethereum;
    }
  };

  // const addBlockchainNetwork = async () => {
  //   if (chainId !== "80001") {
  //     await window.ethereum.request({
  //       method: "wallet_addEthereumChain",
  //       params: [POLYGON_MUMBAI_PARAMS],
  //     });
  //   }
  // };

  React.useEffect(() => {
    const ethereum = detectProvider();

    if (ethereum) {
      if (!chainId) {
        window.ethereum.on("chainChanged", (networkId) => {
          setChainId(networkId);
        });
      }

      if (user.wallet && !chainId) {
        setChainId(window.ethereum.networkVersion);
      }
    }
  }, [chainId, setChainId, user]);

  return (
    <div className={`${styles.wrapper} ${!user.wallet ? styles.notLogin : ""}`}>
      {!user.wallet && (
        <button
          className={styles.button}
          onClick={() => activateBrowserWallet()}
        >
          Connect Metamask
        </button>
      )}

      {/* {user.wallet && (
        <button className={styles.button} onClick={addBlockchainNetwork}>
          Switch to Polygon Testnet Mumbai Network
        </button>
      )} */}

      {user.wallet && (
        <div>
          <div>
            <p className={styles.header}>Your Metamask is now connected.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetamaskButton;
