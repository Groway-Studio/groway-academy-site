import styles from "./what_you_will_learn.module.scss";

const WhatYouWillLearn = () => {
  return (
    <section className={styles.what_you_will_learn}>
      <h2>
        Tecnologías que puedes <span>aprender con nosotros</span>
      </h2>
      <img
        src="./src/assets/what-you-will-learn/technologies.svg"
        alt="Tecnologías"
      />
    </section>
  );
};

export default WhatYouWillLearn;
