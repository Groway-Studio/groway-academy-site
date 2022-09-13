import { fakeCustomers } from "../../data";
import OpinionCard from "../OpinionCard";

import styles from "./opinions.module.scss";

const Opinions = () => {
  return (
    <section className={styles.opinions}>
      <h2 className={styles.opinions__title}>Opiniones</h2>

      <div className={styles.opinions__content}>
        <ul className={styles.opinions__content_list}>
          {fakeCustomers.map((customer) => (
            <OpinionCard key={customer.id} {...customer} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Opinions;
