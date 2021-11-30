import styles from "./HomeBtns.module.scss";

const HomeBtns = () => {
  return (
    <div className={styles.homeBtns}>
      <button>Women</button>
      <button>Child</button>
      <button>Men</button>
    </div>
  );
};

export default HomeBtns;
