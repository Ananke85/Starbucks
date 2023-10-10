import Footer from "../../Footer/Footer";
import styles from "./login.module.css";
import SidebarLogin from "../../Sidebar/SidebarLogin";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarLogin />

        <div className={styles.container}>
          <div className={styles.content}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.sectionForm}
            >
              <div className={styles.inputs}>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  {...register("email", {
                    required: "El email es obligatorio",
                  })}
                  className={styles.box}
                  name="email"
                />
                {errors.email && (
                  <p className={styles.error}>
                    <span className="icon-warning1"></span>
                    {errors.email.message}
                  </p>
                )}

                <div className={styles.password}>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Contraseña"
                    {...register("password", {
                      required: "La contraseña es obligatoria",
                    })}
                    className={styles.box}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  
                  {passwordVisible ? (
                    <span
                      className="icon-eye-blocked"
                      onClick={togglePasswordVisibility}
                    ></span>
                  ) : (
                    <span
                      className="icon-eye1"
                      onClick={togglePasswordVisibility}
                    ></span>
                  )}

                  
                </div>
                {errors.password && (
                    <p className={styles.error}>
                      <span className="icon-warning1"></span>
                      {errors.password.message}
                    </p>
                  )}
              </div>

              <div className={styles.details}>
                <div className={styles.casilla}>
                  <input
                    type="checkbox"
                    className={styles.check}
                    defaultChecked={true}
                  ></input>
                  <label>Mantener inicio de sesión</label>
                  <p className={styles.underline}>Detalles</p>
                </div>
                <p className={styles.underline}>¿Olvidaste tu contraseña?</p>
                <button type="submit">Inicia Sesión</button>
              </div>
            </form>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;

{
  /* <input
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                  })}
                  className={styles.box}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="icon-eye"></span>
                <span className="icon-eye-blocked"></span> */
}
