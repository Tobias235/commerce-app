import { useEffect, useState } from "react";
import useGetOrderHistory from "../../hooks/useGetOrderHistory";
import OrderDetails from "./OrderDetails";
import styles from "./OrderHistory.module.scss";

const OrderHistory = () => {
  const [showDetails, setShowDetails] = useState([]);
  const { orderHistory, getOrderHistory } = useGetOrderHistory();

  useEffect(() => {
    getOrderHistory("orders");
  }, []);

  useEffect(() => {
    setShowDetails(orderHistory);
  }, [orderHistory]);

  const handleShowDetails = (e) => {
    const orderNumber = Number(e.currentTarget.id);
    setShowDetails(
      showDetails.map((order) => {
        if (order.orderNumber === orderNumber) {
          return {
            ...order,
            details: !order.details,
          };
        }
        return order;
      })
    );
  };

  const showHistory = orderHistory ? true : false;

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
        {showHistory &&
          showDetails.map((order) => {
            return (
              <div
                className={styles.orderContainer}
                id={order.orderNumber}
                key={order.orderNumber}
                onClick={handleShowDetails}
              >
                <div className={styles.list}>
                  <span>{order.date}</span>
                  <span>{order.orderNumber}</span>
                  <span>{order.status}</span>
                  <span>${order.total}</span>
                </div>
                <OrderDetails order={order} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderHistory;
