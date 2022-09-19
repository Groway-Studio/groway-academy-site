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
            Prepara a tu equipo en las tecnologías más competitivas y mejora la
            productividad de tu empresa con nuestros programas personalizados y
            diseñados a medida.
          </p>
        </div>
        <div className={styles.what_we_offer__card_item}>
          <img
            src={BootcampsIllustration}
            alt="Bootcamps y cursos abiertos"
            draggable={false}
          />
          <h3>Cursos Especializados</h3>
          <p>
            Aprende de programación web, desarrollo móvil, bases de datos, data
            science, UX/UI en profundidad con nuestros cursos especializados.
          </p>
        </div>
        <div className={styles.what_we_offer__card_item}>
          <img
            src={CertificationIllustration}
            alt="Bootcamps"
            draggable={false}
          />

          <h3>Bootcamps</h3>
          <p>
            Preparación intensiva y práctica usando las tecnologías más
            demandadas del mercado con enfoque en empleabilidad inmediata.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
