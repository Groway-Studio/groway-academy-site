import { NextCourses } from "../../components";
import styles from "./next_courses_container.module.scss";

const NextCoursesContainer = () => {
  return (
    <section id="cursos" className={styles.next_courses_container}>
      <NextCourses />
    </section>
  );
};

export default NextCoursesContainer;
