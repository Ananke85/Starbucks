import Footer from "../../Footer/Footer";
import SidebarMerchan from "../../Sidebar/SidebarMerchan";
import styles from "./merchan.module.css";
import merchan1 from "../../../assets/merchan1.png";
import merchan2 from "../../../assets/merchan2.png";
import merchan3 from "../../../assets/merchan3.png";
import merchan4 from "../../../assets/merchan4.png";
import merchan5 from "../../../assets/merchan5.png";
import merchan6 from "../../../assets/merchan6.png";
import merchan7 from "../../../assets/merchan7.png";
import merchan8 from "../../../assets/merchan8.png";
import merchan9 from "../../../assets/merchan9.png";
import merchan10 from "../../../assets/merchan10.png";
import merchan11 from "../../../assets/merchan11.png";
import merchan12 from "../../../assets/merchan12.png";
import merchan13 from "../../../assets/merchan13.png";

const Merchandising = () => {
  const merchandising = [
    {
      title: "Vaso Reutilizable",
      text: [
        "Nuestro famoso vaso reutilizable.",
        "Reduce, reutiliza y recicla.",
      ],
      img: merchan1,
    },
    {
      title: "Circular Cup",
      text: [
        "Nuestro vaso hecho con vasos reciclados.",
        "¡Cómpralo en tu Starbucks® shop más cercana!",
      ],
      img: merchan2,
    },
    {
      title: "Cold Cup Timi Negro mate con pajita",
      text: [
        "Cold cup, para bebidas frías mate con logo de la sirena y pajita.",
        "¡Hazte con tu vaso Starbucks® con pajita!",
      ],
      img: merchan3,
    },
    {
      title: "Cold Cup Terrazo Con pajita",
      text: [
        "Cold cup Starbucks® para bebidas frías, estilo terrazo con wordmarc y pajita.",
      ],
      img: merchan4,
    },
    {
      title: "Taza Siren Stone gris",
      text: [
        "Maravillosa taza gris con estilo industrial.",
        "Estas tazas de Starbucks® están disponibles en diferentes tamaños short, tall, grande.",
      ],
      img: merchan5,
    },
    {
      title: "Taza Onyx negra",
      text: [
        "Taza minimalista negra de Starbucks®.",
        "¡Disponible en dos tamaños!",
      ],
      img: merchan6,
    },
    {
      title: "Tumbler Luxor negro mate",
      text: [
        "Termo Starbucks® para bebidas calientes y frías negro mate con rombos.",
      ],
      img: merchan7,
    },
    {
      title: "Tumbler gris verde",
      text: ["Termo Starbucks® para bebidas calientes y frías, verde y gris."],
      img: merchan8,
    },
    {
      title: "Tumbler maz verde tanslúcido",
      text: ["Termo Starbucks® para bebidas calientes y frías transparente."],
      img: merchan9,
    },
    {
      title: "Botella verde metalizada",
      text: ["Botella Starbucks® verde metalizada."],
      img: merchan10,
    },
    {
      title: "Cuaderno espiral sirena verde",
      text: [
        "Cuaderno Starbucks® verde tamaño A5 con escamas de sirena y en su interior, páginas delineadas.",
        "Cómpralo en tu Starbucks® shop más cercana.",
      ],
      img: merchan11,
    },
    {
      title: "Estuche Pajitas reutilizables; verde, negro y limpiador",
      text: [
        "Estuche con pajitas de diferentes colores y su limpiador, ¡un must en el merchandising Starbucks®!",
      ],
      img: merchan12,
    },
    {
      title: "Llavero Cold cup detalle dorado",
      text: ["Llavero Starbucks® con forma de vaso."],
      img: merchan13,
    },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarMerchan />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h3 className={styles.title}>
                POR CADA BEBIDA PERFECTA HAY UNA TAZA PERFECTA.
              </h3>
              <h3>
                Sea cual sea tu bebida favorita. Fría o caliente. Con nata o sin
                nat. Tamaño short, Tall, Grande o Venti… tenemos algo para ti.
                disfruta de nuestros vasos reutilizables, tazas, termos y Cold
                Cups vayas donde vayas. <br></br>
                <br></br>Además, cada vez que los uses en nuestras tiendas
                Starbucks® te descontamos +0,40cts por ayudarnos a reducir el
                uso de envases de un solo uso.{" "}
                <strong>Reduce, reutiliza, Recicla.</strong>
              </h3>
            </div>

            {merchandising.map((merchan, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  index % 2 === 0 ? styles.right : styles.left
                }`}
              >
                <img src={merchan.img} />
                <div>
                  <h3>{merchan.title}</h3>
                  {merchan.text.map((el, subIndex) => (
                    <div key={subIndex} className={styles.element}>
                      {el}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Merchandising;
