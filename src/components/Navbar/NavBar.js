import styles from "./NavBar.module.scss";
import NavBarBtns from "./NavBarBtns";
import NavBarForm from "./NavBarForm";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.mobileNav}>
        <span className="material-icons-outlined">menu</span>
      </div>
      <div className={styles.desktopNav}>
        <h1>Commerce</h1>
        <div className={styles.navBtns}>
          <NavBarBtns />
        </div>
        <NavBarForm />
      </div>
    </nav>
  );
};

export default NavBar;
