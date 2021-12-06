import * as React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MetamaskButton from "../components/MetamaskButton/MetamaskButton";
import Form from "../components/Form/Form";
import Container from "../components/Container/Container";
import Countdown from "../components/Countdown/Countdown";

const Index = () => {
  const [chainId, setChainId] = React.useState(null);

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
