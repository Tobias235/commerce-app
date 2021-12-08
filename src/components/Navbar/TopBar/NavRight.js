import { Link } from "react-router-dom";

import styles from "./NavRight.module.scss";

const NavRight = () => {
  return (
    <div className={styles.navRight}>
      <Link to="/login">Login</Link>
      <span className="material-icons-outlined">
        <Link to="/cart">shopping_cart</Link>
      </span>
    </div>
  );
};

export default NavRight;
