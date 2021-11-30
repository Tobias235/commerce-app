import { Link } from "react-router-dom";

import styles from "./UserPage.module.scss";

const UserPage = () => {
  return (
    <div className={styles.userPage}>
      <div className={styles.userContainer}>
        <h2>Welcome User Name!</h2>
        <div className={styles.userButtons}>
          <button>
            <Link to="/orderhistory"> Order History </Link>
          </button>
          <button>
            <Link to="/cart"> Your Cart </Link>
          </button>
          <button>
            <Link to="/admin">Admin Page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
