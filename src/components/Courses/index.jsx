import { useState, useEffect } from "react";

import { courses, courses_categories } from "../../data";
import loupe from "../../assets/loupe.svg";

import styles from "./courses.module.scss";

const Courses = ({ filters }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState("");

  const [coursesFiltered, setCoursesFiltered] = useState([...courses]);

  const { filterByLevel, filterByPrice, filterByTechnology } = filters;

  console.log(filterByLevel, filterByPrice, filterByTechnology);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() !== "") {
      const regex = new RegExp(`${searchTerm}`, "i");

      const courses = coursesFiltered.filter((course) =>
        regex.test(course.title)
      );

      setCoursesFiltered(courses);
    } else if (searchTerm.trim() !== "" && categories !== "") {
      const filteredByCategory = courses.filter(
        (course) => course.category === categories
      );

      setCoursesFiltered(filteredByCategory);
    }

    // console.log(state);
    // console.log(searchTerm);
  };

  useEffect(() => {
    if (categories !== "") {
      const coursesFilteredByCategory = courses.filter(
        (course) => course.category === categories
      );

      setCoursesFiltered(coursesFilteredByCategory);

      if (searchTerm.trim() !== "") {
        console.log("hola");
        const regex = new RegExp(`${searchTerm}`, "i");

        const courses = coursesFiltered
          .filter((course) => regex.test(course.title))
          .filter((course) => course.category === categories);

        setCoursesFiltered(courses);
      }
    } else {
      setCoursesFiltered(courses);
    }
  }, [categories]);

  const handleInputChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  useEffect(() => {
    if (filterByLevel.length > 0) {
      const courses = filterByLevel.map((level) => {
        console.log(level);
        return coursesFiltered.filter((course) => course.level === level);
      });

      console.log(courses.flat());
    }
  }, [filterByLevel]);

  // useEffect(() => {
  //   if (filterByPrice.length > 0) {
  //     const courses = coursesFiltered.filter(
  //       (course, index) => course.level === filterByPrice[index]
  //     );

  //     console.log(courses);
  //   }
  // }, [filterByPrice]);

  return (
    <div className={styles.courses__container}>
      <form className={styles.courses__form} onSubmit={handleSearch}>
        <div className={styles.courses__form_search}>
          <img
            src={loupe}
            alt="loupe"
            draggable={false}
            className={styles.courses__form_search_logo}
          />
          <input
            type="text"
            className={styles.courses__form_search_input}
            value={searchTerm}
            onChange={handleInputChange}
          />

          <select
            name="categories"
            id="categories"
            className={styles.courses__form_search_select}
            value={categories}
            onChange={({ target }) => setCategories(target.value)}
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
        {coursesFiltered.length === 0 && <p>No se encontraron resultados</p>}
        {coursesFiltered.map(({ image, title, description }) => (
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
