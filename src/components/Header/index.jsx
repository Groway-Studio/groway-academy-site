import Navbar from "../Navbar";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />

      <div className={styles.header__content}>
        <div className={styles.header__description}>
          <h1 className={styles.header__description_mainTitle}>
            Entrenamos <span>equipos</span> y personas en
            <span>programación</span>
          </h1>
        </div>
        <div className={styles.header__heroImage}>
          <img
            src="./src/assets/team.svg"
            alt="Groway.Studio"
            draggable={false}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
