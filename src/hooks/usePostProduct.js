const usePostProduct = () => {
  const postData = async (product, url) => {
    console.log(product, url);
    if (product !== null) {
      const response = await fetch(
        `https://commerce-app-ebe6d-default-rtdb.europe-west1.firebasedatabase.app/${url}.json`,
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
