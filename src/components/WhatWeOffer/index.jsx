import styles from "./what_we_offer.module.scss";

import ProgrammerIllustration from "../../assets/what-we-offer/programmer.svg";
import BootcampsIllustration from "../../assets/what-we-offer/bootcamps.svg";
import CertificationIllustration from "../../assets/what-we-offer/certification.svg";

const WhatWeOffer = () => {
  return (
    <section className={styles.what_we_offer} id="servicios">
      <h2>
        ¿Qué te <span>ofrecemos?</span>
      </h2>

      <div className={styles.cards_container}>
        <div className={styles.what_we_offer__card_item}>
          <img
            src={ProgrammerIllustration}
            alt="Programas In-House para tu empresa"
            draggable={false}
          />

          <h3>Programas In-House para tu empresa</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni nam,
            facilis dicta, excepturi perspiciatis.
          </p>
        </div>
        <div className={styles.what_we_offer__card_item}>
          <img
            src={BootcampsIllustration}
            alt="Bootcamps y cursos abiertos"
            draggable={false}
          />
          <h3>Bootcamps y cursos abiertos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni nam,
            facilis dicta, excepturi perspiciatis.
          </p>
        </div>
        <div className={styles.what_we_offer__card_item}>
          <img
            src={CertificationIllustration}
            alt="Lorem Ipsum Dolor"
            draggable={false}
          />

          <h3>Lorem Ipsum Dolor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni nam,
            facilis dicta, excepturi perspiciatis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
