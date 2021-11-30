import styles from "./AdminPage.module.scss";

const AdminPage = () => {
  return (
    <div className={styles.adminPage}>
      <div className={styles.adminForm}>
        <h2>Add Product</h2>
        <form>
          <input type="text" placeholder="Add Product Name" />
          <input type="text" placeholder="Add Product Description" />
          <label for="file-upload" className={styles.customFile}>
            Custom Upload
          </label>
          <input id="file-upload" type="file" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
