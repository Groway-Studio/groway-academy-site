import { Header } from "../../components";
import styles from "./header_container.module.scss";

const HeaderContainer = () => {
  return (
    <div className={styles.header_container}>
      <Header />
    </div>
  );
};

export default HeaderContainer;
