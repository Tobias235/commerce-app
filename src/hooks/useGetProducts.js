import { useState } from "react";

const useGetProducts = () => {
  const [products, setProducts] = useState();
  const getProducts = async () => {
    const response = await fetch(
      "https://commerce-app-ebe6d-default-rtdb.europe-west1.firebasedatabase.app/products.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    const loadedProducts = [];

    for (const key in data) {
      loadedProducts.push({
        id: key,
        category: data[key].category,
        description: data[key].description,
        image: data[key].image,
        name: data[key].name,
        price: data[key].price,
        sort: data[key].sort,
      });
    }
    setProducts(loadedProducts);
  };
  return {
    getProducts,
    products,
  };
};

export default useGetProducts;
