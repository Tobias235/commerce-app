import { useEffect, useState } from "react";
import useGetProducts from "../../hooks/useGetProducts";

import styles from "./ProductsList.module.scss";

const ProductsList = ({ onShow, onClose }) => {
  const [cart, setCart] = useState([]);
  const { products, getProducts } = useGetProducts();
  useEffect(() => {
    getProducts();
  }, []);

  let cartArray = [];

  const handleAddCart = (e) => {
    console.log(e.target.value);
    const checkArray = products.find(
      (product) => product.id === e.target.value
    );
    cartArray = [checkArray, ...cart];
    setCart([...cartArray]);
    localStorage.setItem("cart", JSON.stringify(cartArray));
  };

  const render = products ? true : false;

  return (
    <div className={styles.productsList}>
      <h1>Products</h1>

      {/* filter for mobile */}
      <div className={styles.filter}>
        Filter
        <span className="material-icons-outlined" onClick={onShow}>
          filter_alt
        </span>
      </div>
      <div className={styles.productContainer} onClick={onClose}>
        {render &&
          products.map((product) => {
            return (
              <div className={styles.card} key={product.id}>
                <img src={product.image} alt="Product" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>${product.price}</span>
                <button
                  type="button"
                  onClick={handleAddCart}
                  value={product.id}
                >
                  Add
                  <span className="material-icons-outlined">
                    add_shopping_cart
                  </span>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ProductsList;
