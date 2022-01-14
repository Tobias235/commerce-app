import { Fragment } from "react";
import styles from "./OrderDetails.module.scss";

const OrderDetails = ({ order }) => {
  console.log(order);
  return (
    <Fragment>
      {order.details && (
        <div className={styles.detailTitles}>
          <span>Product</span>
          <span>Price</span>
          <span>Amount</span>
          <span>Total</span>
        </div>
      )}

      {order.details &&
        order.cart.map((detail) => {
          return (
            <div key={detail.id}>
              {order.details && (
                <div className={`${styles.productDetails} ${styles.border}`}>
                  <div className={styles.product}>{detail.name}</div>
                  <div className={styles.price}>${detail.price}</div>
                  <div className={styles.amount}>{detail.value}</div>
                  <div className={styles.total}>
                    ${detail.value * detail.price}
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </Fragment>
  );
};

export default OrderDetails;
