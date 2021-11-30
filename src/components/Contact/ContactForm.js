import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactForm}>
        <h1>Contact us</h1>
        <form>
          <input type="email" placeholder="Enter Email Adress" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Write your text"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
