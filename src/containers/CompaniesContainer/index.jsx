import { Companies } from "../../components";
import styles from "./companies_container.module.scss";

const CompaniesContainer = () => {
  return (
    <section className={styles.companies_container}>
      <Companies />
    </section>
  );
};

export default CompaniesContainer;
