import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

import GrowayLogo from "../../assets/groway.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <nav className={styles.navbar}>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onClick={() => (width < 600 ? setShow(!show) : setShow(false))}
      />
      <label htmlFor="checkbox" className={styles.navbar__burger_menu}>
        <div className={styles.navbar__burger_line}></div>
        <div className={styles.navbar__burger_line}></div>
        <div className={styles.navbar__burger_line}></div>
      </label>

      <div className={styles.navbar__logo}>
        <img
          src={GrowayLogo}
          alt="Groway Studio"
          draggable={false}
        />
      </div>
      <ul
        className={`${styles.navbar__options} ${
          show && width < 600 ? styles.navbar__show : ""
        }`}
        onClick={() => setShow(!show)}
      >
        <li className={styles.navbar__options_item}>
          <a href="#">Inicio</a>
        </li>
        <li className={styles.navbar__options_item}>
          <a href="#servicios">Servicios</a>
        </li>
        <li className={styles.navbar__options_item}>
          <a href="#">¿Quiénes Somos?</a>
        </li>
        <li className={styles.navbar__options_item}>
          <a href="#">Contáctanos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
