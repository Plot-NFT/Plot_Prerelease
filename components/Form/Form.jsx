/* eslint-disable react/prop-types */
import axios from "axios";
import * as React from "react";

import styles from "./Form.module.scss";

const Form = ({ chainState, userState }) => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [chainId] = chainState;
  const [user, setUser] = userState;

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const submit = async (e) => {
    e.preventDefault();

    const isValid = validateEmail(email);

    if (isValid) {
      const dataPayload = { wallet: user.wallet, email };

      const { data } = await axios.put("/api/whitelist", dataPayload);

      if (data.error) {
        setError(data.error);
      } else {
        setEmail("");
        setError(data.message);
        setUser({ ...user, mailingStatus: "registered" });
      }
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

  return user.wallet && isValidNetwork() ? (
    user.mailingStatus === "registered" ? (
      <div className={styles.wrapper}>We will notify you! Keep on waiting!</div>
    ) : (
      <div className={styles.wrapper}>
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
              value={email}
              required
            />

            <span>{error}</span>
          </div>

          <button className={styles.button} type="submit">
            Subscribe
          </button>
        </form>
      </div>
    )
  ) : null;
};

export default Form;
