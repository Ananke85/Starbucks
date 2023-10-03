import { useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const dropdown = [
    {
      name: "Sobre Nosotros",
      expand: [
        "Acerca de Starbucks®",
        "Sala de Prensa",
        "Atención al Cliente",
        "Preguntas Frecuentes",
      ],
    },
    {
      name: "Información Nutricional y Alérgenos",
      expand: ["Información Nutricional", "Alérgenos"],
    },
    { name: "Trabaja con Nosotros", expand: ["Starbucks® Partners"] },
    { name: "Responsabilidad", expand: ["Nuestra Responsabilidad"] },
  ];

  const initialExpandedState = Array(dropdown.length).fill(false);
  const [expandedStates, setExpandedStates] = useState(initialExpandedState);

  const handleExpandClick = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          {dropdown.map((item, index) => (
            <div key={index} className={styles.dropdown}>
              <h2>{item.name}</h2>
              <button
                onClick={() => handleExpandClick(index)}
                className={
                  !expandedStates[index] ? styles.arrow : styles.active
                }
              >
                <span className="icon-circle-down"></span>
              </button>
              {expandedStates[index] && (
                <div className={styles.expandContent}>
                  {item.expand.map((expandItem, expandIndex) => (
                    <p key={expandIndex} className={styles.itemExpanded}>
                      {expandItem}
                    </p>
                  ))}
                </div>
              )}
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
