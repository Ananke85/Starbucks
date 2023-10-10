import Footer from "../../Footer/Footer";
import styles from "./carta.module.css";
import { CARTA } from "../../../route-paths";
import bebida1 from "../../../assets/bebida1.jpg";
import bebida2 from "../../../assets/bebida2.jpg";
import bebida3 from "../../../assets/bebida3.jpg";
import bebida4 from "../../../assets/bebida4.jpg";
import bebida5 from "../../../assets/bebida5.jpg";
import bebida6 from "../../../assets/bebida6.jpg";
import bebida7 from "../../../assets/bebida7.png";

import SidebarBebidas from "../../Sidebar/SidebarBebidas";

const Bebidas = () => {
  const bebidas = [
    {
      title: "Bebidas Espresso",
      des: "Bebidas con los mejores granos de café 100% arábica, cuidadosamente seleccionados y tostados al más puro estilo Starbucks®.",
      img: bebida1,
    },
    {
      title: "Chocolates",
      des: "Descubre nuestros chocolates y sus mejores combinaciones, calientes o fríos... ¡Tú decides!",
      img: bebida2,
    },
    {
      title: "Frappuccino® con base de café",
      des: "Bebidas refrescantes de hielo batido, con base de café con diferentes variedades de sabores, mezclados con leche o bebidas vegetales.",
      img: bebida3,
    },
    {
      title: "Frappuccino® con base de suave crema",
      des: "Bebidas refrescantes de hielo batido con una dulce base de crema Starbucks, leches o bebidas vegetales y nata montada. Puedes elegir entre diferentes variedades de sabores.",
      img: bebida4,
    },
    {
      title: "Té",
      des: "Diferentes mezcas de té Teavana® para tus mejores infusiones.",
      img: bebida5,
    },
    {
      title: "Refresha®",
      des: "Bebidas refrescantes, con frutas y base de café verde. Te sorprenderán.",
      img: bebida6,
    },
    {
      title: "Smoothies y Zumos",
      des: "Bebidas frías, con frutas exprimidas o batidas. La mejor manera de tomarte una bebida 100% natural.",
      img: bebida7,
    },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarBebidas />

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h3>
                <strong>
                  Ofrecerte una taza de café perfecta. Este anhelo es lo que nos
                  hizo arrancar en 1971 y lo que nos mantiene en marcha hoy.
                </strong>
                (Eso, y también el café.)
              </h3>
              <h3>
                Por este motivo, nuestros responsables de comprar café recorren
                el mundo seleccionando cuidadosamente los mejores granos. Por
                este motivo, nuestros maestros tostadores hacen guardia mientras
                se tuesta cada lote, para extraer el máximo sabor de cada grano.
                Y por este motivo, nuestros encantadores baristas preparan
                artesanalmente cada bebida de acuerdo con tu petición. Queremos
                que descubras tu bebida perfecta y personal. El grano se merece
                que uno se sienta tan apasionado por el café como nosotros (y
                como tú), ¿no crees?
              </h3>
            </div>

            <div className={styles.news}>
              {bebidas.map((bebida, index) => (
                <div key={index} className={styles.card}>
                  <img src={bebida.img} alt="bebidas variadas" />
                  <div className={styles.cardText}>
                    <h3 className={styles.title}>{bebida.title}</h3>
                    <p className={styles.secondIntro}>{bebida.des}</p>
                    <button>Más info</button>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={CARTA}
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button>Carta</button>
            </a>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Bebidas;
