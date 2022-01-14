import { useState } from "react";
import ProductFilter from "./ProductFilter";
import styles from "./Products.module.scss";
import ProductsList from "./ProductsList";

const Products = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => {
    setShowFilter(true);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  return (
    <div className={styles.products}>
      {showFilter && <ProductFilter />}
      <ProductsList onShow={handleShowFilter} onClose={handleCloseFilter} />
    </div>
  );
};

export default Products;
