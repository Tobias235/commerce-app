import { useEffect, useState } from "react";
import styles from "./CartItem.module.scss";

const CartItem = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")));
  }, []);

  // const handleItemAmount = (e) => {
  //   console.log(cartItems);
  //   const itemId = e.target.parentElement.id;
  //   const value = cartItems.find((cartItem) => cartItem.id === itemId);
  //   if (e.target.id === "increment") {
  //     cartItems.map((cartItem) =>
  //       value.id === itemId ? console.log("its true") : console.log("its false")
  //     );
  //   }
  // };

  const setQuantity = (e, cartItem, amount) => {
    let cartAmount;
    if (cartItem.value <= 1) {
      cartAmount = cartItems.filter((item) => item.id !== cartItem.id);
      console.log("Remove");
      console.log(cartAmount);
    }
    if (e.target.id === "increment" && cartItem.value >= 1) {
      console.log("increment");
      cartAmount = cartItems.map((item) =>
        item.id === cartItem.id
          ? {
              ...item,
              value: item.value + amount,
            }
          : item
      );
    } else if (e.target.id === "decrement" && cartItem.value > 1) {
      console.log("decrement");
      cartAmount = cartItems.map((item) =>
        item.id === cartItem.id
          ? {
              ...item,
              value: item.value - amount,
            }
          : item
      );
    }
    console.log("Add storage");
    localStorage.setItem("cart", JSON.stringify(cartAmount));
    setCartItems(cartAmount);
  };

  return (
    <div>
      {cartItems.map((cartItem) => {
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
                <p className={styles.price}>${cartItem.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
