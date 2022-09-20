import { filtersData } from "../../data";

import styles from "./sidebar_filters.module.scss";

const SidebarFilters = () => {
  return (
    <aside className={styles.sidebar_filters}>
      <h2 className={styles.sidebar_filters__title}>Filtros</h2>

      <form className={styles.sidebar_filters__form}>
        {filtersData.map(({ title, options }) => (
          <div className={styles.sidebar_filters__form_filter}>
            <h3>{title}</h3>

            {options.map((option) => (
              <div key={option} className={styles.sidebar_filters__form_group}>
                <input type="checkbox" name={option} id={option} />
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
