import styles from "./ConfirmedOrder.module.scss";
import CustomerInfo from "./CustomerInfo";

const ConfirmedOrder = () => {
  return (
    <div className={styles.confirmedOrder}>
      <div className={styles.confirmedOrderContainer}>
        <h2>Order Confirmed</h2>
        <span>Order: #0001</span>
        <div>
          <h1 className={styles.customerInformation}>Customer Information</h1>
        </div>
        <CustomerInfo />
      </div>
    </div>
  );
};

export default ConfirmedOrder;
