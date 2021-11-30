import HomeBtns from "./HomeBtns";
import HomeOptions from "./HomeOptions";
import styles from "./JumbotronOptions.module.scss";

const JumbotronOptions = () => {
  return (
    <div className={styles.option}>
      <HomeOptions />
      <HomeBtns />
    </div>
  );
};

export default JumbotronOptions;
