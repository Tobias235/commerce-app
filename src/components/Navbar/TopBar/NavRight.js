import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./NavRight.module.scss";

const NavRight = () => {
  const [theme, setTheme] = useState(false);

  const mode = theme ? (
    <span className="material-icons-outlined">light_mode</span>
  ) : (
    <span className="material-icons-outlined">dark_mode</span>
  );
  return (
    <div className={styles.navRight}>
      <Link to="/login">Login</Link>
      <span className="material-icons-outlined">
        <Link to="/cart">shopping_cart</Link>
      </span>
      {mode}
    </div>
  );
};

export default NavRight;
