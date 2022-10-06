import { useState, useEffect } from "react";

import { courses, courses_categories, filtersData } from "../../data";
import loupe from "../../assets/loupe.svg";

import styles from "./courses.module.scss";

const Courses = ({ filters }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState("");

  const [coursesFiltered, setCoursesFiltered] = useState([...courses]);

  const { filterByLevel, filterByPrice, filterByTechnology } = filters;

  const handleSearch = (e) => {
    e.preventDefault();

    const regex = new RegExp(`${searchTerm}`, "i");

    if (searchTerm.trim() !== "" && categories.trim() === "") {
      const courses = coursesFilter()
        .flat()
        .filter((course) => regex.test(course.title));

      setCoursesFiltered(courses);
    } else if (searchTerm.trim() !== "" && categories !== "") {
      const filteredByCategory = coursesFilter()
        .flat()
        .filter((course) => course.category === categories)
        .filter((course) => regex.test(course.title));

      setCoursesFiltered(filteredByCategory);
    }
  };

  useEffect(() => {
    if (categories !== "") {
      const coursesFilteredByCategory = coursesFilter()
        .flat()
        .filter((course) => course.category === categories);

      setCoursesFiltered(coursesFilteredByCategory);
      if (searchTerm.trim() !== "") {
        const regex = new RegExp(`${searchTerm}`, "i");
        const courses = coursesFilter()
          .flat()
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
    const regex = new RegExp(`${searchTerm}`, "i");

    if (searchTerm.trim() === "" && categories.trim() === "") {
      setCoursesFiltered(coursesFilter().flat());
    } else if (searchTerm.trim() !== "" && categories.trim() === "") {
      setCoursesFiltered(
        coursesFilter()
          .flat()
          .filter((course) => regex.test(course.title))
      );
    } else {
      setCoursesFiltered(
        coursesFilter()
          .flat()
          .filter((course) => regex.test(course.title))
          .filter((course) => course.category === categories)
      );
    }
  }, [filterByLevel, filterByPrice, filterByTechnology]);

  const filterPrices = () => {
    const filter = filterByPrice
      .map((price) =>
        filtersData[1].options.findIndex((pricesRange) => pricesRange === price)
      )
      .map((index) => {
        return index === 0
          ? courses.filter((course) => course.price > 0 && course.price <= 30)
          : index === 1
          ? courses.filter((course) => course.price >= 30 && course.price <= 60)
          : index === 2
          ? courses.filter(
              (course) => course.price >= 60 && course.price <= 100
            )
          : index === 3
          ? courses.filter((course) => course.price > 100)
          : null;
      })
      .flat();

    return filter;
  };

  useEffect(() => {
    if (
      searchTerm.trim("") === "" &&
      categories.trim() === "" &&
      filterByLevel.length === 0 &&
      filterByPrice.length === 0 &&
      filterByTechnology.length === 0
    ) {
      setCoursesFiltered(courses);
    }
  }, [
    searchTerm,
    categories,
    filterByLevel,
    filterByPrice,
    filterByTechnology,
  ]);

  const coursesFilter = () => {
    return filterByLevel.length > 0 &&
      filterByPrice.length > 0 &&
      filterByTechnology.length > 0
      ? filterByLevel
          .map((level) =>
            filterByTechnology.map((tech) =>
              filterPrices().filter(
                (course) => course.level === level && course.technology === tech
              )
            )
          )
          .flat()
      : filterByLevel.length > 0 &&
        filterByPrice.length > 0 &&
        filterByTechnology.length === 0
      ? filterByLevel
          .map((level) =>
            filterPrices().filter((course) => course.level === level)
          )
          .flat()
      : filterByLevel.length > 0 &&
        filterByPrice.length === 0 &&
        filterByTechnology.length === 0
      ? filterByLevel
          .map((level) => courses.filter((course) => course.level === level))
          .flat()
      : filterByLevel.length > 0 &&
        filterByPrice.length === 0 &&
        filterByTechnology.length > 0
      ? filterByLevel
          .map((level) =>
            filterByTechnology.map((tech) =>
              courses.filter(
                (course) => course.level === level && course.technology === tech
              )
            )
          )
          .flat()
      : filterByLevel.length === 0 &&
        filterByPrice.length > 0 &&
        filterByTechnology.length > 0
      ? filterByTechnology
          .map((tech) =>
            filterPrices().filter((course) => course.technology === tech)
          )

          .flat()
      : filterByLevel.length === 0 &&
        filterByPrice.length > 0 &&
        filterByTechnology.length === 0
      ? filterPrices()
      : filterByLevel.length === 0 &&
        filterByPrice.length === 0 &&
        filterByTechnology.length > 0
      ? filterByTechnology
          .map((tech) => courses.filter((course) => course.technology === tech))
          .flat()
      : courses;
  };

  return (
    <div className={styles.courses__container}>
      <form className={styles.courses__form} onSubmit={handleSearch}>
        <div className={styles.courses__form_search}>
          <img
            src={loupe}
            alt="loupe"
            draggable={false}
            className={styles.courses__form_search_logo}
            onClick={handleSearch}
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
        {coursesFiltered.flat().length === 0 && (
          <p>No se encontraron resultados</p>
        )}
        {coursesFiltered.flat().map(({ image, title, description }) => (
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
