import placeholder from "./../../images/placeholder.png";
import styles from "./CartItem.module.scss";

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.wrapper}>
        <img src={placeholder} alt="product" />
        <div className={styles.cartInfo}>
          <span>Brand</span>
          <span>Product Name</span>
          <span>Size</span>
        </div>
      </div>
      <div className={styles.cartAmount}>
        <div className={styles.cartBtns}>
          <button>-</button>
          <input type="number" value="1" />
          <button>+</button>
        </div>
        <div>
          <p className={styles.price}>99USD</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
