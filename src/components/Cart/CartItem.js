import { useEffect, useState } from "react";
import styles from "./CartItem.module.scss";

const CartItem = ({ onSetAmount }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const setQuantity = (e, cartItem, amount) => {
    let cartAmount;
    if (cartItem.value <= 1) {
      cartAmount = cartItems.filter((item) => item.id !== cartItem.id);
    }
    if (e.target.id === "increment" && cartItem.value >= 1) {
      cartAmount = cartItems.map((item) =>
        item.id === cartItem.id
          ? {
              ...item,
              value: item.value + amount,
            }
          : item
      );
    } else if (e.target.id === "decrement" && cartItem.value > 1) {
      cartAmount = cartItems.map((item) =>
        item.id === cartItem.id
          ? {
              ...item,
              value: item.value - amount,
            }
          : item
      );
    }

    localStorage.setItem("cart", JSON.stringify(cartAmount));
    setCartItems(cartAmount);
    console.log(cartItems);
  };

  useEffect(() => {
    let total = [0];
    if (!cartItems) {
      return;
    }
    for (let i = 0; i < cartItems.length; i++) {
      const cartItem = cartItems[i].price * cartItems[i].value;
      total = [...total, cartItem];
    }
    const cartTotal = total.reduce((a, b) => a + b);
    onSetAmount(cartTotal);
    localStorage.setItem("cartTotal", JSON.stringify(cartTotal));
  }, [cartItems]);

  const showCart = cartItems ? true : false;

  return (
    <div>
      {showCart &&
        cartItems.map((cartItem) => {
          return (
            <div className={styles.cartItem} key={cartItem.id}>
              <div className={styles.wrapper}>
                <img src={cartItem.image} alt="product" />
                <div className={styles.cartInfo}>
                  <span>{cartItem.brand}</span>
                  <span>{cartItem.name}</span>
                </div>
              </div>
              <div className={styles.cartAmount}>
                <div className={styles.cartBtns} id={cartItem.id}>
                  <button
                    id="decrement"
                    onClick={(e) => setQuantity(e, cartItem, 1)}
                  >
                    -
                  </button>
                  <input type="number" value={cartItem.value} disabled />
                  <button
                    id="increment"
                    onClick={(e) => setQuantity(e, cartItem, 1)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className={styles.price}>
                    ${cartItem.price * cartItem.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CartItem;
