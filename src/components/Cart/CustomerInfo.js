import styles from "./CustomerInfo.module.scss";

const CustomerInfo = () => {
  return (
    <div className={styles.customerInformationContainer}>
      <div className={styles.contact}>
        <div>
          <h4>Contact Information</h4>
          <p>E-mail Address</p>
          <h4>Shipping Address</h4>
          <p>Your Name</p>
          <p>Zipcode</p>
          <p>City</p>
          <p>Country</p>
          <p>Phone Number</p>

          <h4>Shipping Method</h4>
          <p>Standard Delivery - Free</p>
        </div>
        <div>
          <h4>Payment Method</h4>
          <p>Cash on Delivery (COD)</p>
          <h4>Billing Address</h4>
          <p>Your Name</p>
          <p>Zipcode</p>
          <p>City</p>
          <p>Country</p>
          <p>Phone Number</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
