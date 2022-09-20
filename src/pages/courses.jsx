import { Navbar, SidebarFilters, Courses } from "../components";
import { FooterContainer } from "../containers";

import styles from "../styles/pages/courses.module.scss";

const CoursesPage = () => {
  return (
    <div className={styles.courses}>
      <Navbar className={styles.navbar} />
      <div className={styles.container}>
        <SidebarFilters />
        <Courses />
      </div>
      <FooterContainer className={styles.footer} />
    </div>
  );
};

export default CoursesPage;
