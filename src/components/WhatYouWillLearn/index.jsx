import styles from "./what_you_will_learn.module.scss";

import TechnologiesListImage from "../../assets/what-you-will-learn/technologies.svg";

const WhatYouWillLearn = () => {
  return (
    <section className={styles.what_you_will_learn}>
      <h2>
        Tecnologías que podrás <span>aprender con nosotros</span>
      </h2>
      <img
        src={TechnologiesListImage}
        alt="Tecnologías"
      />
    </section>
  );
};

export default WhatYouWillLearn;
