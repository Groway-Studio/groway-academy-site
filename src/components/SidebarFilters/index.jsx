import { useEffect, useState } from "react";

import { filtersData } from "../../data";

import styles from "./sidebar_filters.module.scss";

const SidebarFilters = ({ setFiltersState, filters }) => {
  const handleFilters = (e) => {
    const title =
      e.target.parentElement.parentElement.querySelector("h3").textContent;

    if (title === "Nivel") {
      if (e.target.checked) {
        setFiltersState((state) => ({
          ...state,
          filterByLevel: [...state.filterByLevel, e.target.name],
        }));
      } else {
        setFiltersState((state) => ({
          ...state,
          filterByLevel: state.filterByLevel.filter(
            (element) => element !== e.target.name
          ),
        }));
      }
    } else if (title === "Precio (USD)") {
      if (e.target.checked) {
        setFiltersState((state) => ({
          ...state,
          filterByPrice: [...state.filterByPrice, e.target.name],
        }));
      } else {
        setFiltersState((state) => ({
          ...state,
          filterByPrice: state.filterByPrice.filter(
            (element) => element !== e.target.name
          ),
        }));
      }
    } else if (title === "Tecnología") {
      if (e.target.checked) {
        setFiltersState((state) => ({
          ...state,
          filterByTechnology: [...state.filterByTechnology, e.target.name],
        }));
      } else {
        setFiltersState((state) => ({
          ...state,
          filterByTechnology: state.filterByTechnology.filter(
            (element) => element !== e.target.name
          ),
        }));
      }
    }
  };

  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => {});
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.burger_menu__container}>
        <input
          type="checkbox"
          name="checkbox2"
          id="checkbox2"
          onClick={() => (width < 600 ? setShow(!show) : setShow(false))}
        />
        <label htmlFor="checkbox2" className={styles.burger_menu}>
          <div
            className={`${styles.burger_menu__line} ${
              show ? styles.white_line : ""
            }`}
          ></div>
          <div
            className={`${styles.burger_menu__line} ${
              show ? styles.white_line : ""
            }`}
          ></div>
          <div
            className={`${styles.burger_menu__line} ${
              show ? styles.white_line : ""
            }`}
          ></div>
        </label>
      </div>
      <aside
        className={`${styles.sidebar_filters} ${
          width < 600 && show ? styles.show : ""
        }`}
      >
        <h2 className={styles.sidebar_filters__title}>Filtros</h2>

        <form className={styles.sidebar_filters__form}>
          {filtersData.map(({ title, options, values }) => (
            <div key={title} className={styles.sidebar_filters__form_filter}>
              <h3>{title}</h3>

              {options.map((option, index) => (
                <div
                  key={option}
                  className={styles.sidebar_filters__form_group}
                >
                  <input
                    type="checkbox"
                    name={option}
                    id={option}
                    onChange={handleFilters}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          ))}
        </form>
        <div className={styles.sidebar_filters__list}>
          {filters.filterByLevel.map((level) => (
            <small className={styles.sidebar_filters__list_item} key={level}>
              {level}
            </small>
          ))}
          {filters.filterByPrice.map((price) => (
            <small className={styles.sidebar_filters__list_item} key={price}>
              {price}
            </small>
          ))}
          {filters.filterByTechnology.map((tech) => (
            <small className={styles.sidebar_filters__list_item} key={tech}>
              {tech}
            </small>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default SidebarFilters;
