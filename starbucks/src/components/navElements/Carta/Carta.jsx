import SidebarCarta from "../../Sidebar/SidebarCarta";
import styles from "./carta.module.css";
import carta1 from "../../../assets/carta1.png";
import carta2 from "../../../assets/carta2.png";

import Footer from "../../Footer/Footer";
import { BEBIDAS, COMIDAS } from "../../../route-paths";

const Carta = () => {
  const news = [
    {
      title: "Bebidas",
      text: "Podrás disfrutar de tu bebida favorita cómo y dónde quieras, con un sinfín de combinaciones donde elegir; frías, calientes, con leches o bebidas vegetales, con diferentes sabores.",
      img: carta1,
      link: BEBIDAS
    },
    {
      title: "Dulces y Salados",
      text: "Descubre cual es el 'perfect pairing' de tu bebida favorita. No te pierdas la variedad de productos que siempre preparamos para ti, con la mejor gama de sabores y de la mejor calidad.",
      img: carta2,
      link: COMIDAS
    },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarCarta />

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h3 className={styles.special}>
                Bebidas deliciosas y artesanales. Alimentos de gran sabor,
                elaborados con ingredientes sencillos pero de gran calidad. El
                café está en nuestro corazón, y también lo están todas las
                formas en las que te llevamos la experiencia Starbucks®, estés
                donde estés.
              </h3>
              <h3 className={styles.secondIntro}>
                Tanto si se trata de tu taza de café favorita para empezar el
                día como de un bocado rápido para animarte, tenemos algo
                preparado para ti. ¡Descúbrelo!
              </h3>
            </div>

            <div className={styles.news}>
              {news.map((item, index) => (
                <div key={index} className={styles.card}>
                  <img src={item.img} />
                  <div className={styles.cardText}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <button>Descubre más</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Carta;
