import { useState } from "react";

import TopNav from "./components/Navbar/TopBar/TopNav";
import NavBar from "./components/Navbar/NavBar";
import MobileNav from "./components/Navbar/MobileNav";

import styles from "./App.module.scss";
import Main from "./components/Main";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className={styles.app}>
      <TopNav />
      <NavBar onShow={handleShowMenu} />
      {showMenu && <MobileNav onClose={handleCloseMenu} />}
      <Main onClose={handleCloseMenu} />
    </div>
  );
}

export default App;
