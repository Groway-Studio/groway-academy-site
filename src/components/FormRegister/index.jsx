import styles from "./form_register.module.scss";

const FormRegister = () => {
  return (
    <form className={styles.form_register}>
      <h2>Registrar cuenta</h2>

      <div className={styles.form_register__form_group}>
        <label htmlFor="firstname">Nombre</label>
        <input type="text" id="firstname" />
      </div>
      <div className={styles.form_register__form_group}>
        <label htmlFor="lastname">Apellido</label>
        <input type="text" id="lastname" />
      </div>
      <div className={styles.form_register__form_group}>
        <label htmlFor="username">Nombre de usuario</label>
        <input type="text" id="username" />
      </div>
      <div className={styles.form_register__form_group}>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" />
      </div>
      <div className={styles.form_register__form_group}>
        <label htmlFor="username">Contraseña</label>
        <input type="text" id="username" />
      </div>

      <input type="submit" value="Registrar" />
    </form>
  );
};

export default FormRegister;
