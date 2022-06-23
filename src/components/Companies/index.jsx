import styles from "./companies.module.scss";

const Companies = () => {
  return (
    <section className={styles.companies}>
      <h2>
        Nuestros instructores <span>trabajan en:</span>
      </h2>
      <div className={styles.companies__content}>
        <img src="./src/assets/companies/uber.png" alt="Uber" />
        <img src="./src/assets/companies/globant.png" alt="Globant" />
        <img
          src="./src/assets/companies/mercado-libre.png"
          alt="Mercado Libre"
        />
        <img src="./src/assets/companies/rappi.png" alt="Rappi" />
      </div>
    </section>
  );
};

export default Companies;
