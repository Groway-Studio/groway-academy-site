import { WhatWeOffer } from "../../components";
import styles from "./what_we_offer_container.module.scss";

const WhatWeOfferContainer = () => {
  return (
    <section id="servicios" className={styles.what_we_offer_container}>
      <WhatWeOffer />
    </section>
  );
};

export default WhatWeOfferContainer;
