/* eslint-disable react/react-in-jsx-scope */

import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";

const unsubscribe = () => {
  return (
    <>
      <Header />

      <Container>
        <h1>Goodbye Plotlander!</h1>

        <p>You have been unsubscribed from our mailing list</p>
      </Container>
    </>
  );
};

export default unsubscribe;
