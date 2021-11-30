import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import styles from "./TopNav.module.scss";

const TopNav = () => {
  return (
    <div className={styles.topNav}>
      <div className={styles.navContainer}>
        <NavLeft />
        <NavRight />
      </div>
    </div>
  );
};

export default TopNav;
