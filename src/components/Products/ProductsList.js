import styles from "./ProductsList.module.scss";
import placeholder from "../../images/placeholder.png";

const ProductsList = () => {
  return (
    <div className={styles.productsList}>
      <h1>Products</h1>

      {/* filter for mobile */}
      <div className={styles.filter}>
        Filter
        <span class="material-icons-outlined">filter_alt</span>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.card}>
          <img src={placeholder} alt="Product" />
          <h3>Product Name</h3>
          <p>Short Description</p>
          <button>
            Add <span class="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
        <div className={styles.card}>
          <img src={placeholder} alt="Product" />
          <h3>Product Name</h3>
          <p>Short Description</p>
          <button>
            Add <span class="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
        <div className={styles.card}>
          <img src={placeholder} alt="Product" />
          <h3>Product Name</h3>
          <p>Short Description</p>
          <button>
            Add <span class="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
        <div className={styles.card}>
          <img src={placeholder} alt="Product" />
          <h3>Product Name</h3>
          <p>Short Description</p>
          <button>
            Add <span class="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
        <div className={styles.card}>
          <img src={placeholder} alt="Product" />
          <h3>Product Name</h3>
          <p>Short Description</p>
          <button>
            Add <span class="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
        <div className={styles.card}>
          <img src={placeholder} alt="Product" />
          <h3>Product Name</h3>
          <p>Short Description</p>
          <button>
            Add <span class="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
        <div className={styles.card}>
          <img src={placeholder} alt="Product" />
          <h3>Product Name</h3>
          <p>Short Description</p>
          <button>
            Add <span class="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
        <div className={styles.card}>
          <img src={placeholder} alt="Product" />
          <h3>Product Name</h3>
          <p>Short Description</p>
          <button>
            Add <span class="material-icons-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductsList;
