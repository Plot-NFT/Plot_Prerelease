import * as React from "react";
import { useEthers } from "@usedapp/core";

import styles from "./Form.module.scss";

const Form = ({ chainState }) => {
  const { account } = useEthers();

  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [registered, setRegistered] = React.useState(false);
  const [chainId, setChainId] = chainState;

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const submit = (e) => {
    e.preventDefault();

    const isValid = validateEmail(email);

    if (isValid) {
      console.log(email);

      setRegistered(true);
    } else {
      setError("Enter valid email");
    }
  };

  const inputChange = (e) => {
    setEmail(e.target.value);

    if (error.length) {
      setError("");
    }
  };

  const isValidNetwork = () => {
    return chainId === "80001";
  };

  return account && isValidNetwork() ? (
    <div className={styles.wrapper}>
      {!registered && (
        <>
          <p className={styles.header}>
            If you want to be notified on our release date, please subscribe to
            our mail
          </p>

          <form className={styles.form} onSubmit={submit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>

              <input
                type="email"
                name="email"
                id="email"
                onChange={inputChange}
                placeholder="name@mail.com"
                required
              />

              <span>{error}</span>
            </div>

            <button className={styles.button} type="submit">
              Subscribe
            </button>
          </form>
        </>
      )}

      {registered && <p>We will notify you on our release date!</p>}
    </div>
  ) : null;
};

export default Form;
