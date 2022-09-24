import { FormRegister, Navbar } from "../components";
import { FooterContainer } from "../containers";

import styles from "../styles/pages/register.module.scss";

const RegisterPage = () => {
  return (
    <section className={styles.register}>
      <Navbar className={styles.navbar} />

      <div className={styles.container}>
        <FormRegister />
      </div>

      <FooterContainer />
    </section>
  );
};

export default RegisterPage;
