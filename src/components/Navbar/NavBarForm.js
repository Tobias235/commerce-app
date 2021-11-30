import styles from "./NavBarForm.module.scss";

const NavBarForm = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Search..." />
      <button>
        <span className="material-icons-outlined">search</span>
      </button>
    </form>
  );
};

export default NavBarForm;
