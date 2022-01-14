import styles from "./HomeOptions.module.scss";

const HomeOptions = () => {
  return (
    <div className={styles.homeOptions}>
      <div className={styles.circle}>
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80"
          alt="Women"
        />
      </div>
      <div className={styles.circle}>
        <img
          src="https://images.unsplash.com/photo-1624794230601-b0de6de44673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Child"
        />
      </div>
      <div className={styles.circle}>
        <img
          src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
          alt="Men"
        />
      </div>
    </div>
  );
};

export default HomeOptions;
