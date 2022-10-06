import { useState } from "react";

import { Navbar, SidebarFilters, Courses } from "../components";
import { FooterContainer } from "../containers";

import styles from "../styles/pages/courses.module.scss";

const CoursesPage = () => {
  const [state, setState] = useState({
    filterByLevel: [],
    filterByPrice: [],
    filterByTechnology: [],
  });

  return (
    <div className={styles.courses}>
      <Navbar className={styles.navbar} />
      <div className={styles.container}>
        <div className={styles.container__content}>
          <SidebarFilters setFiltersState={setState} filters={state} />
          <Courses filters={state} />
        </div>
      </div>
      <FooterContainer className={styles.footer} />
    </div>
  );
};

export default CoursesPage;
