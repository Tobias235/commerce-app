import styles from "./ProductFilter.module.scss";

const ProductFilter = () => {
  return (
    <div className={styles.productFilter}>
      <h1>Filter</h1>
      <div className={styles.filter}>
        <button>Chair</button>
        <button>Drone</button>
        <button>Headset</button>
        <button>Smart Watch</button>

        <h3>Price Range</h3>
        <div className={styles.filterPrice}>
          <input type="number" value="0" />
          <input type="number" value="1000" />
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
