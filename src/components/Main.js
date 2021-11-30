import { Routes, Route } from "react-router-dom";

import ContactForm from "./Contact/ContactForm";
import Jumbotron from "./Home/Jumbotron";
import Login from "./Login/Login";
import Products from "./Products/Products";
import UserPage from "./Login/UserPage";
import AdminPage from "./Login/AdminPage";
import Cart from "./Cart/Cart";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Jumbotron />} />
        <Route path="contacts" element={<ContactForm />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="userpage" element={<UserPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;