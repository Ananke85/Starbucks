import Footer from "../../Footer/Footer";
import styles from "./carta.module.css";
import { CARTA } from "../../../route-paths";
import comida1 from "../../../assets/comida1.png";
import comida2 from "../../../assets/comida2.png";
import comida3 from "../../../assets/comida3.png";
import comida4 from "../../../assets/comida4.png";
import comida5 from "../../../assets/comida5.png";
import comida6 from "../../../assets/comida6.png";
import comida7 from "../../../assets/comida7.png";
import comida8 from "../../../assets/comida8.png";
import comida9 from "../../../assets/comida9.png";

import SidebarComidas from "../../Sidebar/SidebarComidas";

const Comidas = () => {
  const comidas = [
    {
      title: "Bollería",
      des: "La mejor selección de productos de bollería. ¡Descubre nuestros horneados en tienda, cada día!",
      img: comida1,
    },
    {
      title: "Sándwiches y Bocadillos",
      des: "Sabrosas mezclas de ingredientes que sólo podrás encontrarlos aquí.",
      img: comida2,
    },
    {
      title: "Cookies",
      des: "Recetas totalmente diseñadas para nosotros. El mejor capricho horneado en tienda.",
      img: comida3,
    },
    {
      title: "Muffins",
      des: "Jugosas, esponjosas y con los mejores sabores.",
      img: comida4,
    },
    {
      title: "Tartas",
      des: "Dulces caprichos en porciones llenas de sabor.",
      img: comida5,
    },
    {
      title: "Ensaladas",
      des: "Sabrosas y saludables ensaladas.",
      img: comida6,
    },
    {
      title: "Sin Gluten",
      des: "Dulces sin gluten para que puedas disfrutar sin preocupaciones.",
      img: comida7,
    },
    {
      title: "Salados Veganos",
      des: "¡Nuestras novedades Plant-based!",
      img: comida8,
    },
    {
      title: "Tostadas",
      des: "En los mejores desayunos continentales no pueden faltar unas buenas tostadas. Descubre nuestra variedad de panes y sus mejores combinaciones.",
      img: comida9,
    },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarComidas />

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h2>
                En Starbucks® utilizamos los mejores ingredientes para ofrecerte
                una rica y variada selección de comida que acompaña y realza de
                forma perfecta nuestros cafés.
              </h2>
              <h3>
                En nuestras tiendas encontrarás sabores diferentes y tentadores
                con los cuales podrás disfrutar de una taza de tu café favorito.
                Una comida deliciosa y única, para que vivas tu experiencia
                Starbucks desde el desayuno hasta la cena.
              </h3>
            </div>

            <div className={styles.news}>
              {comidas.map((comida, index) => (
                <div key={index} className={styles.card}>
                  <img src={comida.img} alt="comidas variadas" />
                  <div className={styles.cardText}>
                    <h3 className={styles.title}>{comida.title}</h3>
                    <p className={styles.secondIntro}>{comida.des}</p>
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

export default Comidas;
