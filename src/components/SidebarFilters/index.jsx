import PropTypes from "prop-types";

import { filtersData } from "../../data";

import styles from "./sidebar_filters.module.scss";

const SidebarFilters = ({ setState }) => {
  const handleFilters = (e) => {
    const title =
      e.target.parentElement.parentElement.querySelector("h3").textContent;

    if (title === "Nivel") {
      if (e.target.checked) {
        setState((state) => ({
          ...state,
          filterByLevel: [...state.filterByLevel, e.target.name],
        }));
      } else {
        setState((state) => ({
          ...state,
          filterByLevel: state.filterByLevel.filter(
            (element) => element !== e.target.name
          ),
        }));
      }
    } else if (title === "Precio") {
      if (e.target.checked) {
        setState((state) => ({
          ...state,
          filterByPrice: [...state.filterByPrice, e.target.name],
        }));
      } else {
        setState((state) => ({
          ...state,
          filterByPrice: state.filterByPrice.filter(
            (element) => element !== e.target.name
          ),
        }));
      }
    } else if (title === "Tecnología") {
      if (e.target.checked) {
        setState((state) => ({
          ...state,
          filterByTechnology: [...state.filterByTechnology, e.target.name],
        }));
      } else {
        setState((state) => ({
          ...state,
          filterByTechnology: state.filterByTechnology.filter(
            (element) => element !== e.target.name
          ),
        }));
      }
    }
  };

  return (
    <aside className={styles.sidebar_filters}>
      <h2 className={styles.sidebar_filters__title}>Filtros</h2>

      <form className={styles.sidebar_filters__form}>
        {filtersData.map(({ title, options }) => (
          <div key={title} className={styles.sidebar_filters__form_filter}>
            <h3>{title}</h3>

            {options.map((option) => (
              <div key={option} className={styles.sidebar_filters__form_group}>
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
    </aside>
  );
};

export default SidebarFilters;

SidebarFilters.propTypes = {
  setState: PropTypes.func.isRequired,
};
