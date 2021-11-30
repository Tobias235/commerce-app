import styles from "./NavLeft.module.scss";

const NavLeft = () => {
  return (
    <div className={styles.navLeft}>
      <span>
        <span className="material-icons-outlined">email</span>
        placeholder@gmail.com
      </span>
      <span>
        <span className="material-icons-outlined">call</span>123456789
      </span>
    </div>
  );
};

export default NavLeft;
