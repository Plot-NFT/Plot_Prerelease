/* eslint-disable react/prop-types */
import axios from "axios";
import * as React from "react";
import { useUser } from "../../context/userContext";

import styles from "./Form.module.scss";

const Form = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [user, dispatch] = useUser();

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

      dispatch({ type: "submitting" });

      try {
        const { data: emailRes } = await axios.post("/api/mailing", { email });

        if (emailRes.error) {
          setError(emailRes.error);
          dispatch({
            type: "failed",
          });
        } else {
          const { data: whitelistRes } = await axios.put(
            "/api/whitelist",
            dataPayload
          );

          if (whitelistRes.error) {
            setError(whitelistRes.error);
            dispatch({
              type: "failed",
            });
          } else {
            setEmail("");
            setError(whitelistRes.message);

            dispatch({
              type: "success",
              payload: {
                wallet: whitelistRes.data.wallet,
                mailingStatus: whitelistRes.data.mailingStatus,
              },
            });
          }
        }
      } catch (error) {
        console.error(error);
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

  return user.wallet ? (
    user.mailingStatus === "registered" ? (
      <div className={styles.wrapper}>We will notify you. Keep on waiting.</div>
    ) : (
      <div className={styles.wrapper}>
        <p>
          If you want to be notified about the release on February the 1st of
          2022, leave us your E-Mail below.
        </p>

        <p>
          Your E-Mail will not be connected to your Metamask and stored
          separately.
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

          <button
            className={styles.button}
            type="submit"
            disabled={user.status === "submitting"}
          >
            {user.status === "submitting" ? "Submitting..." : "Subscribe"}
          </button>
        </form>
      </div>
    )
  ) : null;
};

export default Form;
