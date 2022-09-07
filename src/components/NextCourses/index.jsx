import styles from "./next_courses.module.scss";

import PythonLogo from "../../assets/next-courses/python.svg";
import NodeLogo from "../../assets/next-courses/node.svg";

const NextCourses = () => {
  return (
    <section className={styles.next_courses}>
      <h2>
        Próximos <span>cursos abiertos</span>
      </h2>
      <div className={styles.next_courses__content}>
        <div>
          <img
            src={PythonLogo}
            alt="Python"
            draggable={false}
          />
          <h3>Python de 0 a Experto</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            nobis illum, eaque deserunt eveniet illo? Sunt provident hic tempora
            atque corrupti nesciunt.
          </p>

          <a href="https://aprendepython.groway.studio/?fbclid=IwAR1Rs5k041EjFUbJX87Y5k346B7sLUswVr08vrZazSGjoyxz1PiOPilPGIU" target="_blank">Más Info</a>
        </div>
        <div>
          <img
            src={NodeLogo}
            alt="Node"
            draggable={false}
          />
          <h3>Node de 0 a Experto</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            nobis illum, eaque deserunt eveniet illo? Sunt provident hic tempora
            atque corrupti nesciunt.
          </p>

          <button>Más Info</button>
        </div>
      </div>
    </section>
  );
};

export default NextCourses;
