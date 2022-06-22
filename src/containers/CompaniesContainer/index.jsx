import { Companies } from "../../components";
import styles from "./companies_container.module.scss";

const CompaniesContainer = () => {
  return (
    <div className={styles.companies_container}>
      <Companies />
    </div>
  );
};

export default CompaniesContainer;
