import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePostProduct from "../../hooks/usePostProduct";

import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const { postData: getProduct } = usePostProduct();

  useEffect(() => {
    setTotalAmount(JSON.parse(localStorage.getItem("cartTotal")));
  }, []);

  const handleCompleteOrder = (e) => {
    const url = e.target.id;
    const cart = JSON.parse(localStorage.getItem("cart"));

    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const date = year + "-" + month + "-" + day;

    let products = {
      orderNumber: Math.floor(Math.random() * 1000000),
      status: "recieved",
      date: date,
      total: totalAmount,
      details: false,
      cart: {
        ...cart,
      },
    };

    getProduct(products, url);
    localStorage.removeItem("cart");
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <h2>Cart</h2>
        <CartItem onSetAmount={setTotalAmount} />
        <div className={styles.completeOrder}>
          <span>Total: ${totalAmount}</span>
          <Link
            to="/orderconfirmed"
            id="orders"
            className={styles.completeOrderBtn}
            onClick={handleCompleteOrder}
          >
            Complete Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
