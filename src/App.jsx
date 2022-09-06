import {
  FooterContainer,
  HeaderContainer,
  WhatYouWillLearnContainer,
  WhatWeOfferContainer,
  NextCoursesContainer,
  // CompaniesContainer,
  // ContactFormContainer,
} from "./containers";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <div className={styles.container}>
        <WhatWeOfferContainer />
        <NextCoursesContainer />
        <WhatYouWillLearnContainer />
        {/* <CompaniesContainer /> */}
        {/* <ContactFormContainer /> */}
      </div>
      <FooterContainer />
    </div>
  );
};

export default App;
