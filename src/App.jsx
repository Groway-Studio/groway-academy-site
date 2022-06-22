import {
  FooterContainer,
  HeaderContainer,
  WhatYouWillLearnContainer,
  WhatWeOfferContainer,
  CompaniesContainer,
  NextCoursesContainer,
} from "./containers";

import styles from "./App.module.scss";
import ContactFormContainer from "./containers/ContactFormContainer";

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <div className={styles.container}>
        <WhatWeOfferContainer />
        <NextCoursesContainer />
        <WhatYouWillLearnContainer />
        <CompaniesContainer />
        <ContactFormContainer />
      </div>
      <FooterContainer />
    </div>
  );
};

export default App;
