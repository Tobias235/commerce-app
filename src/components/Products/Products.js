import ProductFilter from "./ProductFilter";
import styles from "./Products.module.scss";
import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <div className={styles.products}>
      <ProductFilter />
      <ProductsList />
    </div>
  );
};

export default Products;
