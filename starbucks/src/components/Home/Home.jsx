import styles from "./home.module.css";
import banner from "../../assets/banner.jpg";
import coffeeHome from "../../assets/coffee_home.jpg";
import carta1 from "../../assets/carta1.png";
import carta2 from "../../assets/carta2.png";
import carta3 from "../../assets/carta3.jpg";
import Footer from "../Footer/Footer";

const Home = () => {
  const news = [
    {
      title: "Carta",
      text: "Bebidas deliciosas y alimentos de gran sabor elaborados con ingredientes sencillos pero de gran calidad.",
      img: carta1,
    },
    {
      title: "Tiendas Starbucks®",
      text: "Encuentra tu tienda Starbucks® más cercana, ¡te esperamos!",
      img: carta2,
    },
    {
      title: "Cómo preparar café Starbucks®",
      text: "Descubre los distintos métodos de elaboración para preparar tu café Starbucks® perfecto en casa.",
      img: carta3,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <img src={banner} alt="pumpkin spice latte is back" />

        <div className={styles.content}>
          <div className={styles.intro}>
            <h2>Un otoño delicioso</h2>
            <p>
              En Starbucks®, el otoño es sinónimo de sabores irresistibles.
              Disfruta de la magia de la temporada con nuestro clásico{" "}
              <strong>Pumpkin Spice Latte,</strong> la mezcla perfecta de café,
              especias y cremosidad. Atrévete con nuestro{" "}
              <strong>Pumpkin Spice Farappucino</strong> si no quieres renunciar
              a tu bebida fría, ¡te encantará! y si eres amante del café intenso
              nuestro <strong>Pumpkin Spice Cold Brew</strong> está hecho para
              ti.<br></br>
              Sumérgete en el sabor del otoño en cada sorbo.
            </p>
            <button>Encuéntranos</button>
          </div>

          <div className={styles.coffee}>
            <img src={coffeeHome} alt="coffee variety" />
            <div>
              <h3>¡Te lo llevamos!</h3>
              <h2>Disfruta tu experiencia Starbucks® donde quieras</h2>
              <p>
                ¿Eres más de café, de smoothie, de latte o de Frappuccino®? No
                esperes más y pide Starbucks® a domicilio o para llevar.
              </p>
              <button>Más información</button>
            </div>
          </div>

          <div className={styles.news}>
            {news.map((item) => (
              <div key={item.title} className={styles.card}>
                <img src={item.img} />
                <div className={styles.cardText}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <button>Más información</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
