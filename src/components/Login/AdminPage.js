import { useEffect, useRef, useState } from "react";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";
import usePostProduct from "../../hooks/usePostProduct";
import styles from "./AdminPage.module.scss";

function AdminPage() {
  const [image, setImage] = useState("");
  const [product, setProduct] = useState(null);
  const productName = useRef("");
  const productDescription = useRef("");
  const productCategory = useRef("");
  const productPrice = useRef("");
  const sortBy = useRef("");
  const productBrand = useRef("");

  const { postData: getProduct } = usePostProduct();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      productDescription.current.value.trim() === "" ||
      productName.current.value.trim() === "" ||
      productCategory.current.value.trim() === "" ||
      productPrice.current.value.trim() === "" ||
      productBrand.current.value.trim() === "" ||
      image === ""
    ) {
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, image.name);
    uploadBytes(storageRef, image).then(() => {
      const starsRef = ref(storage, image.name);
      getDownloadURL(starsRef).then((url) => {
        setProduct({
          category: productCategory.current.value,
          brand: productBrand.current.value,
          name: productName.current.value,
          description: productDescription.current.value,
          price: productPrice.current.value,
          sort: sortBy.current.value,
          value: 1,
          image: url,
        });
      });
    });
    setTimeout(() => {
      e.target.reset();
    }, 5000);
  };

  useEffect(() => {
    getProduct(product);
  }, [product]);

  return (
    <div className={styles.adminPage}>
      <div className={styles.adminForm}>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="sortBy">Sort By</label>
          <select ref={sortBy}>
            <option value="others">Others</option>
            <option value="women">Women</option>
            <option value="child">Child</option>
            <option value="men">Men</option>
          </select>
          <label htmlFor="brand">Product Brand</label>
          <input
            type="text"
            id="brand"
            placeholder="Product Brand"
            ref={productBrand}
          />
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            placeholder="Product Name"
            ref={productName}
          />
          <label htmlFor="description">Product Description</label>
          <input
            type="text"
            id="description"
            placeholder="Product Description"
            ref={productDescription}
          />
          <label htmlFor="category">Product Category</label>
          <input
            type="text"
            id="category"
            placeholder="Category"
            ref={productCategory}
          />
          <label htmlFor="price">Product Price</label>
          <input
            type="number"
            id="price"
            placeholder="Price"
            ref={productPrice}
          />
          <label htmlFor="file-upload" className={styles.customFile}>
            Custom Upload
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AdminPage;
