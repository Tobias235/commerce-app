const usePostProduct = () => {
  const postData = async (product) => {
    if (product !== null) {
      const response = await fetch(
        "https://commerce-app-ebe6d-default-rtdb.europe-west1.firebasedatabase.app/products.json",
        {
          method: "POST",
          body: JSON.stringify(product),
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    }
  };
  return {
    postData,
  };
};

export default usePostProduct;
