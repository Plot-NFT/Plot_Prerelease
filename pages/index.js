import * as React from "react";
import axios from "axios";
import { useUser } from "../context/userContext";

import Header from "../components/Header/Header";
import Alert from "../components/Alert/Alert";
import Footer from "../components/Footer/Footer";
import MetamaskButton from "../components/MetamaskButton/MetamaskButton";
import Form from "../components/Form/Form";
import Container from "../components/Container/Container";
import Countdown from "../components/Countdown/Countdown";

const Index = () => {
  const [chainId, setChainId] = React.useState(null);
  const [walletError, setWalletError] = React.useState(false);
  const [user, dispatch] = useUser();

  const detectProvider = () => {
    if (!window.ethereum) {
      return undefined;
    } else {
      return window.ethereum;
    }
  };

  const getChainName = async (chainId) => {
    try {
      const { data } = await axios.get(
        "https://chainid.network/chains_mini.json"
      );

      const network = data.find((val) => val.chainId === chainId);

      return network.name;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const checkUser = async (account) => {
    try {
      const { data } = await axios.get(`/api/whitelist?wallet=${account}`);

      return data.data[0];
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    const ethereum = detectProvider();

    if (ethereum) {
      if (user.status === "idle") {
        ethereum.on("accountsChanged", async (accounts) => {
          dispatch({ type: "loading" });

          if (accounts.length) {
            const isRegistered = await checkUser(accounts[0]);

            if (!isRegistered) {
              const chainId = Number(ethereum.networkVersion);
              const chainName = await getChainName(chainId);

              const whitelistPayload = {
                wallet: accounts[0],
                network: {
                  chainId,
                  chainName: chainName || "",
                },
              };

              try {
                const { data } = await axios.post(
                  "/api/whitelist",
                  whitelistPayload
                );

                console.log("success adding wallet address to whitelist");

                dispatch({
                  type: "success",
                  payload: {
                    wallet: data.data.wallet,
                    mailingStatus: data.data.mailingStatus,
                  },
                });
              } catch (error) {
                console.error(error);
              }
            } else {
              dispatch({
                type: "success",
                payload: {
                  wallet: isRegistered.wallet,
                  mailingStatus: isRegistered.mailingStatus,
                },
              });
            }
          } else {
            dispatch({
              type: "logout",
            });
          }
        });
      }

      const updateUserState = async () => {
        if (ethereum.selectedAddress && user.status === "idle") {
          dispatch({ type: "loading" });

          const isRegistered = await checkUser(ethereum.selectedAddress);

          if (isRegistered) {
            dispatch({
              type: "success",
              payload: {
                wallet: isRegistered.wallet,
                mailingStatus: isRegistered.mailingStatus,
              },
            });
          } else {
            dispatch({
              type: "success",
              payload: {
                wallet: user.wallet,
                mailingStatus: user.mailingStatus,
              },
            });
          }
        }
      };

      updateUserState();
    } else {
      setWalletError(true);
    }
  }, [chainId, dispatch, user]);

  return (
    <>
      <Header />

      <Container>
        {user.status === "loading" ? (
          <h3 className="loading">Loading...</h3>
        ) : (
          <>
            {walletError ? (
              <Alert>
                Please install metamask to use Web3 Service,{" "}
                <a href="https://metamask.io/">https://metamask.io/</a>
              </Alert>
            ) : (
              <>
                <MetamaskButton chainState={[chainId, setChainId]} />

                {user.wallet && <Form />}
              </>
            )}

            <Countdown />
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Index;
