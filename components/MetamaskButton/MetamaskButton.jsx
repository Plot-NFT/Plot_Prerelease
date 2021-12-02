import { useEthers } from "@usedapp/core";
import styles from "./MetamaskButton.module.scss";

const MetamaskButton = () => {
  const { activateBrowserWallet, account } = useEthers();

  return (
    <div className={`${styles.wrapper} ${!account ? styles.notLogin : ""}`}>
      {!account && (
        <button className={styles.button} onClick={activateBrowserWallet}>
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
