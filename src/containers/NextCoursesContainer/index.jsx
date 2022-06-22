import { NextCourses } from "../../components";
import styles from "./next_courses_container.module.scss";

const NextCoursesContainer = () => {
  return (
    <div className={styles.next_courses_container}>
      <NextCourses />
    </div>
  );
};

export default NextCoursesContainer;
