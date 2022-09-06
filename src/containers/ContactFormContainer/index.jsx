import { ContactForm } from "../../components";
import styles from "./contact_form_container.module.scss";

const ContactFormContainer = () => {
  return (
    <section className={styles.contact_form_container}>
      <ContactForm />
    </section>
  );
};

export default ContactFormContainer;
