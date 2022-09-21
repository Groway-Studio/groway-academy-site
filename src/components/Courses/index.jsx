import { courses, courses_categories } from "../../data";
import loupe from "../../assets/loupe.svg";

import styles from "./courses.module.scss";

const Courses = ({ state }) => {
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
            {courses_categories.map(({ title, value }) => (
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

      <div className={styles.courses__results}>
        {courses.map(({ image, title, description }) => (
          <div key={title} className={styles.courses__results_item}>
            <img src={image} alt={title} draggable={false} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Más Info</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
