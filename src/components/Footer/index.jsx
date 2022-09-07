import styles from "./footer.module.scss";

import InstagramIcon from "../../assets/social-media/instagram.svg";
import LinkedinIcon from "../../assets/social-media/linkedin.svg";
import FacebookIcon from "../../assets/social-media/facebook.svg";
import GrowayLogo from "../../assets/groway.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <img src={GrowayLogo} alt="Groway Studio" />
      </div>
      <div className={styles.footer__address}>
        <p className={styles.footer__country_name}>Perú</p>
        <span>
          AV. El Derby 055 Edificio Cronos, Torre 1 Piso 7 Santiago de Surco
          Lima - Perú
        </span>
      </div>
      <div className={styles.footer__contact}>
        <div className={styles.footer__socialMedia}>
          <a
            href="https://www.instagram.com/groway.studio"
            target="_blank"
            rel="noreferrer"
          >
            <img src={InstagramIcon} alt="Groway.Studio" />
          </a>
          <a
            href="https://www.linkedin.com/company/growaystudio"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinIcon} alt="Groway.Studio" />
          </a>
          <a
            href="https://www.facebook.com/groway.studio"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FacebookIcon} alt="Groway.Studio" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
