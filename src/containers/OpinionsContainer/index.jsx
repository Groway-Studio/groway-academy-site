import { Opinions } from "../../components";
import styles from "./opinions_container.module.scss";

const OpinionsContainer = () => {
  return (
    <div className={styles.opinions_container}>
      <Opinions />
    </div>
  );
};

export default OpinionsContainer;
