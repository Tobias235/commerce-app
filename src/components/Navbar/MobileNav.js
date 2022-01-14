import { Link } from "react-router-dom";

import styles from "./MobileNav.module.scss";

const Hamburger = ({ onClose }) => {
  return (
    <div className={styles.hamburger}>
      <h1>Commerce</h1>
      <ul>
        <li onClick={onClose}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={onClose}>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li onClick={onClose}>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
