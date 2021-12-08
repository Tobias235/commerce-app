import TopNav from "./components/Navbar/TopBar/TopNav";
import NavBar from "./components/Navbar/NavBar";
import MobileNav from "./components/Navbar/MobileNav";

import styles from "./App.module.scss";
import Main from "./components/Main";

function App() {
  return (
    <div className={styles.app}>
      <TopNav />
      <NavBar />
      {/* <MobileNav /> */}
      <Main />
    </div>
  );
}

export default App;
