import { useEthers } from "@usedapp/core";
import styles from "./MetamaskButton.module.scss";

const MetamaskButton = () => {
  const { activateBrowserWallet, account } = useEthers();

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

  const addBlockchainNetwork = () => {
    window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [POLYGON_MUMBAI_PARAMS],
      })
      .then((res) => activateBrowserWallet())
      .catch((err) => console.log(err));
  };

  return (
    <div className={`${styles.wrapper} ${!account ? styles.notLogin : ""}`}>
      {!account && (
        <button className={styles.button} onClick={addBlockchainNetwork}>
          Connect Metamask
        </button>
      )}

      {account && (
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
