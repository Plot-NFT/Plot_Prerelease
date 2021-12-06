import * as React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MetamaskButton from "../components/MetamaskButton/MetamaskButton";
import Form from "../components/Form/Form";
import Container from "../components/Container/Container";
import Countdown from "../components/Countdown/Countdown";
import axios from "axios";

const Index = () => {
  const [chainId, setChainId] = React.useState(null);
  const [user, setUser] = React.useState({
    wallet: null,
    mailingStatus: "unknown",
    status: "idle",
  });

  const detectProvider = () => {
    if (!window.ethereum) {
      alert(
        "Please install metamask to use Web3 Service, https://metamask.io/"
      );

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

    const updateUserState = async () => {
      if (ethereum.selectedAddress && user.status === "idle") {
        setUser({
          ...user,
          status: "loading",
        });

        const isRegistered = await checkUser(ethereum.selectedAddress);

        if (isRegistered)
          setUser({
            wallet: isRegistered.wallet,
            mailingStatus: isRegistered.email ? "registered" : "unregistered",
            status: "success",
          });
      }
    };

    updateUserState();

    if (!chainId) {
      ethereum.on("accountsChanged", async (accounts) => {
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
              await axios.post("/api/whitelist", whitelistPayload);

              console.log("success adding wallet address to whitelist");
            } catch (error) {
              console.error(error);
            }
          } else {
            setUser({
              wallet: isRegistered.wallet,
              mailingStatus: isRegistered.email ? "registered" : "unregistered",
              status: "success",
            });
          }
        }
      });
    }
  }, [chainId, user]);

  return (
    <>
      <Header />
      <Container>
        {user.status === "loading" ? (
          <h3 className="loading">Loading...</h3>
        ) : (
          <>
            <MetamaskButton user={user} chainState={[chainId, setChainId]} />
            <Form
              userState={[user, setUser]}
              chainState={[chainId, setChainId]}
            />
            <Countdown />
          </>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Index;
