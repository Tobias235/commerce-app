import styles from "./MobileNav.module.scss";

const Hamburger = () => {
  return (
    <div className={styles.hamburger}>
      <h1>Commerce</h1>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Products</li>
      </ul>
    </div>
  );
};

export default Hamburger;
