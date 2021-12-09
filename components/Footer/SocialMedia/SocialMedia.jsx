/* eslint-disable react/react-in-jsx-scope */
import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={styles.wrapper}>
      <a href="/">
        <img
          className={styles.discord}
          src="/assets/discord.png"
          alt="discord Logo"
        />
      </a>

      <a href="/">
        <img
          className={styles.reddit}
          src="/assets/reddit.png"
          alt="Reddit Logo"
        />
      </a>

      <a href="/">
        <img
          className={styles.twitter}
          src="/assets/twitter.png"
          alt="twitter Logo"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
