import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.discord}
        src="/assets/discord.png"
        alt="discord Logo"
      />

      <img
        className={styles.reddit}
        src="/assets/reddit.png"
        alt="Reddit Logo"
      />

      <img
        className={styles.twitter}
        src="/assets/twitter.png"
        alt="twitter Logo"
      />
    </div>
  );
};

export default SocialMedia;
