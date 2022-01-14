import { useState } from "react";

const useGetOrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const getOrderHistory = async () => {
    const response = await fetch(
      "https://commerce-app-ebe6d-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    const loadedProducts = [];
    for (const key in data) {
      loadedProducts.push({
        ...data[key],
      });
    }
    setOrderHistory(loadedProducts);
  };
  return {
    getOrderHistory,
    orderHistory,
  };
};

export default useGetOrderHistory;
