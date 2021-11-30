import styles from "./Jumbotron.module.scss";
import JumbotronOptions from "./JumbotronOptions";

const Jumbotron = () => {
  return (
    <div className={styles.jumbotron}>
      <div className={styles.container}>
        <h2>Black Friday</h2>
        <h1>25% off everything </h1>
        <JumbotronOptions />
      </div>
    </div>
  );
};

export default Jumbotron;
