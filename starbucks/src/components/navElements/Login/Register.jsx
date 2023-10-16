import Footer from "../../Footer/Footer";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SidebarRegister from "../../Sidebar/SidebarRegister";

const Register = () => {
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

  const numbers = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    { value: 1, label: "Enero" },
    { value: 2, label: "Febrero" },
    { value: 3, label: "Marzo" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Mayo" },
    { value: 6, label: "Junio" },
    { value: 7, label: "Julio" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Septiembre" },
    { value: 10, label: "Octubre" },
    { value: 11, label: "Noviembre" },
    { value: 12, label: "Diciembre" },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarRegister />

        <div className={styles.containerRegister}>
          <div className={styles.contentRegister}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.sectionForm}
            >
              <div className={styles.inputs}>
                <h3>INFORMACIÓN PERSONAL</h3>
                <input
                  type="text"
                  placeholder="Nombre"
                  {...register("name", {
                    required: "El nombre es obligatorio",
                  })}
                  className={styles.box}
                  name="name"
                />
                {errors.name && (
                  <p className={styles.error}>
                    <span className="icon-warning1"></span>
                    {errors.name.message}
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Apellido"
                  {...register("surname", {
                    required: "El apellido es obligatorio",
                  })}
                  className={styles.box}
                  name="surname"
                />
                {errors.surname && (
                  <p className={styles.error}>
                    <span className="icon-warning1"></span>
                    {errors.surname.message}
                  </p>
                )}

                <h3>SEGURIDAD DE CUENTA</h3>
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

                <h3>CUMPLEAÑOS</h3>
                <div className={styles.doubleColumn}>
                  <select
                    {...register("day", {
                      required: "Selecciona un día",
                    })}
                    className={styles.box}
                    name="day"
                  >
                    <option value="">Día</option>
                    {numbers.map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>

                  <select
                    {...register("month", {
                      required: "Selecciona un mes",
                    })}
                    className={styles.box}
                    name="month"
                  >
                    <option value="">Mes</option>
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.doubleColumn}>
                  {errors.day && (
                    <p className={styles.error}>
                      <span className="icon-warning1"></span>
                      {errors.day.message}
                    </p>
                  )}
                  {errors.month && (
                    <p className={styles.error}>
                      <span className="icon-warning1"></span>
                      {errors.month.message}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.details}>
                <h3>CONSIGUE MÁS ESTRELLAS Y GANA RECOMPENSAS</h3>
                <p>
                  El e-mail es una gran manera de estar al día de todos los
                  beneficios y ventajas de Starbucks Rewards, incluyendo acceso
                  exclusivo a bebidas nuevas antes de que salgan.
                </p>
                <div className={styles.casilla}>
                  <input
                    type="checkbox"
                    className={styles.check}
                    defaultChecked={false}
                  ></input>
                  <label>
                    Sí*, quiero saber las ofertas exclusivas, ventajas y nuevos
                    lanzamientos de Starbucks, además de noticias diseñadas para
                    mi cuenta y mi actividad.
                  </label>
                </div>

                <div className={styles.privacy}>
                  <label>
                    Puedes dar de baja tu suscripción cuando quieras. Por favor
                    lee nuestra <strong>política de privacidad</strong> o{" "}
                    <strong>Contáctanos.</strong>
                  </label>
                </div>
              </div>

              <div className={styles.details}>
                <h3>CONDICIONES DE USO</h3>

                <div className={styles.casilla}>
                  <input
                    type="checkbox"
                    className={styles.check}
                    defaultChecked={false}
                  ></input>
                  <div className={styles.privacy}>
                    <label>
                      Al hacer clic en Crear una cuenta acepto la{" "}
                      <strong>Política de Privacidad</strong>, el{" "}
                      <strong>Aviso Legal</strong> y las{" "}
                      <strong>
                        Condiciones Generales de programa Starbucks Rewards.
                      </strong>
                    </label>
                  </div>
                </div>

                <button type="submit">Crear una cuenta</button>
              </div>
            </form>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Register;
