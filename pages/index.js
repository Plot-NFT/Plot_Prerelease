import * as React from "react";
import { useEthers } from "@usedapp/core";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MetamaskButton from "../components/MetamaskButton/MetamaskButton";
import Form from "../components/Form/Form";
import Container from "../components/Container/Container";
import Countdown from "../components/Countdown/Countdown";
import axios from "axios";

const Index = () => {
  const { account } = useEthers();
  const [chainId, setChainId] = React.useState(null);

  const detectProvider = () => {
    if (!window.ethereum) {
      alert(
        "Please install metamask to use Web3 Service, https://metamask.io/"
      );
    }
  };

  const checkUser = async () => {
    try {
      const { data } = await axios.get(`/api/whitelist?wallet=${account}`);

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    detectProvider();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <MetamaskButton chainState={[chainId, setChainId]} />
        <Form chainState={[chainId, setChainId]} />
        <Countdown />
      </Container>

      <Footer />
    </>
  );
};

export default Index;
