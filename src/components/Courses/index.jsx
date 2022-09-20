import { courses_by_category } from "../../data";
import loupe from "../../assets/loupe.svg";

import styles from "./courses.module.scss";

const Courses = () => {
  return (
    <div className={styles.courses__container}>
      <form className={styles.courses__form}>
        <div className={styles.courses__form_search}>
          <img
            src={loupe}
            alt="loupe"
            draggable={false}
            className={styles.courses__form_search_logo}
          />
          <input type="text" className={styles.courses__form_search_input} />

          <select
            name="categories"
            id="categories"
            className={styles.courses__form_search_select}
          >
            {courses_by_category.map(({ title, value }) => (
              <option key={value} value={value}>
                {title}
              </option>
            ))}
          </select>
        </div>

        <input
          type="submit"
          value="Buscar"
          className={styles.courses__form_button}
        />
      </form>

      <div className={styles.courses__results}></div>
    </div>
  );
};

export default Courses;
