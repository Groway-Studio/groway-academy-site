import {
  FooterContainer,
  HeaderContainer,
  NextCoursesContainer,
  WhatWeOfferContainer,
  WhatYouWillLearnContainer,
} from "../containers";

import styles from "../styles/pages/home.module.scss";

const HomePage = () => {
  return (
    <>
      <HeaderContainer />
      <div className={styles.container}>
        <WhatWeOfferContainer />
        <NextCoursesContainer />
        <WhatYouWillLearnContainer />
        {/* <CompaniesContainer /> */}
        {/* <ContactFormContainer /> */}
        {/* <OpinionsContainer /> */}
      </div>
      <FooterContainer />
    </>
  );
};

export default HomePage;
