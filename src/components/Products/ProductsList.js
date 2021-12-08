import { useEffect } from "react";
import useGetProducts from "../../hooks/useGetProducts";

import styles from "./ProductsList.module.scss";

const ProductsList = () => {
  const { products, getProducts } = useGetProducts();
  useEffect(() => {
    getProducts();
  }, []);

  const render = products ? true : false;

  return (
    <div className={styles.productsList}>
      <h1>Products</h1>

      {/* filter for mobile */}
      <div className={styles.filter}>
        Filter
        <span className="material-icons-outlined">filter_alt</span>
      </div>
      <div className={styles.productContainer}>
        {render &&
          products.map((product) => {
            return (
              <div className={styles.card} key={product.id}>
                <img src={product.image} alt="Product" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span>${product.price}</span>
                <button>
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
