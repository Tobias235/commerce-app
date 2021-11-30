import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginForm}>
        <h1 className={styles.loginTitle}>Login in at Commerce</h1>
        <form>
          <input type="email" placeholder="Enter Your E-Mail" />
          <input type="password" placeholder="Enter Your Password" />
          <span>Forgot Password?</span>
          <button type="submit">
            <Link to="/userpage">Log in</Link>
          </button>
        </form>
        <button type="button">Register</button>
      </div>
    </div>
  );
};

export default Login;
