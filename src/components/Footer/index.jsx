import styles from "./footer.module.scss";

import InstagramIcon from "../../assets/social-media/dark/instagram.svg";
import LinkedinIcon from "../../assets/social-media/dark/linkedin.svg";
import FacebookIcon from "../../assets/social-media/dark/facebook.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <img src="./src/assets/groway.svg" alt="Groway Studio" />
      </div>
      <div className={styles.footer__contact}>
        Escríbenos a: <a href="mailto:hola@groway.studio">hola@groway.studio</a>
        <div className={styles.footer__socialMedia}>
          <img src={InstagramIcon} alt="Instagram" />
          <img src={LinkedinIcon} alt="Linkdein" />
          <img src={FacebookIcon} alt="Facebook" />
        </div>
      </div>
      <div className={styles.footer__address}>
        <p className={styles.footer__country_name}>Perú</p>
        <span>
          AV. El Derby 055 Edificio Cronos, Torre 1 Piso 7 Santiago de Surco
          Lima - Perú
        </span>
      </div>

      <div>
        <p className={styles.footer__country_name}>EE.UU</p>
        <a href="tel:+17867558193">+1 786 7558193</a>
      </div>
      <div>
        <p className={styles.footer__country_name}>Argentina</p>
        <a href="tel:+541152175854">+54 11 52175854</a>
      </div>
      <div>
        <p className={styles.footer__country_name}>Colombia</p>
        <a href="tel:+5715800311">+57 15 800311</a>
      </div>
      <div className={styles.footer__socialMediaPhone}>
        <img src={InstagramIcon} alt="Instagram" />
        <img src={LinkedinIcon} alt="Linkdein" />
        <img src={FacebookIcon} alt="Facebook" />
      </div>
    </footer>
  );
};

export default Footer;
