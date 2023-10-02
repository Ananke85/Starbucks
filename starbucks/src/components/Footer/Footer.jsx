import { useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const dropdown = [
    "Sobre Nosotros",
    "Información Nutricional y Alérgenos",
    "Trabaja con Nosotros",
    "Responsabilidad",
  ];

  return (
    <>
      <div className={styles.container}>
        <div>
          {dropdown.map((item, index) => (
            <div key={index} className={styles.dropdown}>
              <h2>{item}</h2>
              <button
                onClick={handleExpandClick}
                className={!isExpanded ? styles.arrow : styles.active}
              >
                <span className="icon-circle-down"></span>
              </button>
            </div>
          ))}
        </div>

      {/* <div>
          <h2>Sobre Nosotros</h2>
          <button
              onClick={handleExpandClick}
              className={!isExpanded ? styles.arrow : styles.active}
            >
              <span className="icon-circle-down"></span>
            </button>

          </div>
          <h2>Información Nutricional y Alérgenos</h2>
          <h2>Trabaja con Nosotros</h2>
          <h2>Responsabilidad</h2>
        </div> */}

      <div className={styles.line}></div>

      <div className={styles.media}>
        <span className="icon-facebook"></span>
        <span className="icon-instagram"></span>
        <span className="icon-twitter"></span>
        <span className="icon-vimeo"></span>
      </div>

      <div className={styles.contact}>
        <p>Contacto</p>
        <p>Política de Privacidad</p>
        <p>Política de Cookies</p>
        <p>Configurador de Cookies</p>
        <p>Sitemap</p>
        <p>Aviso Legal</p>
        <p>Condiciones generales del programa Rewards</p>
      </div>
      </div>

    </>
  );
};

export default Footer;
