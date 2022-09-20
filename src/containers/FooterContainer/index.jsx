import Footer from "../../components/Footer";
import styles from "./footer_container.module.scss";

const FooterContainer = ({ className = "" }) => {
  return (
    <div className={`${styles.footer__container} ${className}`}>
      <Footer />
    </div>
  );
};

export default FooterContainer;
