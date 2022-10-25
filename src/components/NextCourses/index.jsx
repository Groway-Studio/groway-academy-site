import { useState, useEffect } from "react";

import styles from "./next_courses.module.scss";

const NextCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api.groway.academy/public/api/courses"
        );
        const courses = await response.json();

        setCourses(courses);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);

  return (
    <section className={styles.next_courses} id="next-courses">
      <h2>
        Próximos <span>cursos abiertos</span>
      </h2>

      <div className={styles.next_courses__content}>
        {courses.map(({ id, banner, description, name }) => (
          <div className={styles.next_courses__content_card} key={id}>
            <img
              src={`https://api.groway.academy/media/${banner}`}
              alt={name}
              draggable={false}
            />
            <h3>{name}</h3>
            <p>{`${description
              .split(" ")
              .slice(0, 25)
              .join(" ")
              .toString()}...`}</p>

            <a
              href="https://aprendepython.groway.studio/?fbclid=IwAR1Rs5k041EjFUbJX87Y5k346B7sLUswVr08vrZazSGjoyxz1PiOPilPGIU"
              target="_blank"
            >
              Más Info
            </a>
          </div>
        ))}
        {courses.length === 1 && (
          <div className={styles.next_courses__content_card}>
            <div>
              <h4>Próximamente</h4>
            </div>

            <h2></h2>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <a className="anchor-disabled"></a>
          </div>
        )}
      </div>
      {/* <a href="#next-courses" className={styles.next_courses__all}>
        Ver Todos
      </a> */}
    </section>
  );
};

export default NextCourses;
