import not_found from "../assets/not_found.svg";
import { Navbar } from "../components";
import styles from "../styles/pages/not_found.module.scss";

const NotFound = () => {
  return (
    <>
      <Navbar className={styles.navbar__container} />
      <div className={styles.not_found}>
        <img src={not_found} alt="Not Found" draggable={false} />
      </div>
    </>
  );
};

export default NotFound;
