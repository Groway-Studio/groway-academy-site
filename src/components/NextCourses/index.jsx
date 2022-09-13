import styles from "./next_courses.module.scss";

import PythonLogo from "../../assets/next-courses/python.svg";
// import NodeLogo from "../../assets/next-courses/node.svg";

const NextCourses = () => {
  return (
    <section className={styles.next_courses}>
      <h2>
        Próximos <span>cursos abiertos</span>
      </h2>
      <div className={styles.next_courses__content}>
        <div className={styles.next_courses__content_card}>
          <img src={PythonLogo} alt="Python" draggable={false} />
          <h3>Aprende Python como se debe...</h3>
          <p>
            Este curso de Python es para que te puedas introducir y repasar los
            fundamentos de programación a través de Python de una forma
            sencilla, eficiente y divertida.
          </p>

          <a
            href="https://aprendepython.groway.studio/?fbclid=IwAR1Rs5k041EjFUbJX87Y5k346B7sLUswVr08vrZazSGjoyxz1PiOPilPGIU"
            target="_blank"
          >
            Más Info
          </a>
        </div>
        <div className={styles.next_courses__content_card}>
          <div>
            <h4>Próximamente</h4>
          </div>
          <h2></h2>
          <span></span>
          <span></span>
          <span></span>

          <a href="#"></a>
        </div>
      </div>
    </section>
  );
};

export default NextCourses;
