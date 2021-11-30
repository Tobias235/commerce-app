import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <h2>Cart</h2>
        <CartItem />
        <div className={styles.completeOrder}>
          <span>Total: 99USD</span>
          <button className={styles.completeOrderBtn}>Complete Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
