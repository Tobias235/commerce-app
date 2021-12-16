import styles from "./OrderHistory.module.scss";

const OrderHistory = () => {
  return (
    <div className={styles.orderHistory}>
      <div className={styles.orderHistoryContainer}>
        <h2>Order History</h2>
        <div className={styles.historyList}>
          <span>Date</span>
          <span>Order Number</span>
          <span>Status</span>
          <span>Total</span>
        </div>
        <div className={styles.list}>
          <span>2021-12-15</span>
          <span>0001</span>
          <span>Sent</span>
          <span>$53</span>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
