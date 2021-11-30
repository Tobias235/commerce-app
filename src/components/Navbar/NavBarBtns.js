import { Link } from "react-router-dom";

import styles from "./NavBarBtns.module.scss";

const NavBarBtns = () => {
  return (
    <div className={styles.buttons}>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default NavBarBtns;
