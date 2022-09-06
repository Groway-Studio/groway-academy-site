import styles from "./contact_form.module.scss";

import CustomAttention from "../../assets/contact-form/personalized_attention.svg";
import InstagramIcon from "../../assets/social-media/dark/instagram.svg";
import LinkedinIcon from "../../assets/social-media/dark/linkedin.svg";
import FacebookIcon from "../../assets/social-media/dark/facebook.svg";

const ContactForm = () => {
  return (
    <form className={styles.contact_form}>
      <div className={styles.contact_form__info}>
        <img
          src={CustomAttention}
          alt="Atención personalizada"
          className={styles.contact_form__main_image}
        />
        <h3>Atención personalizada</h3>
        <small>
          Déjanos tus datos y un asesor se pondrá en contacto contigo a la
          brevedad
        </small>
        <div className={styles.contact_form__social_media}>
          <img
            src={InstagramIcon}
            alt="Instagram"
          />
          <img
            src={LinkedinIcon}
            alt="Linkdein"
          />
          <img
            src={FacebookIcon}
            alt="Facebook"
          />
        </div>
      </div>
      <div className={styles.contact_form__fields}>
        <label htmlFor="name">¿Cuál es tu nombre?*</label>
        <input type="text" id="name" autoComplete="off" required />

        <label htmlFor="contact">¿Cómo nos ponemos en contacto contigo?</label>
        <input type="text" id="contact" placeholder="www." />

        <label htmlFor="message">Tu mensaje</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Cuéntanos cómo podemos ayudarte"
        ></textarea>

        <input type="submit" value="Enviar" />
      </div>
    </form>
  );
};

export default ContactForm;
