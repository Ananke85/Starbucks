import Footer from "../../Footer/Footer";
import styles from "./delivery.module.css";
import deliver1 from "../../../assets/deliver1.jpg";
import deliver2 from "../../../assets/deliver2.png";
import SidebarDelivery from "../../Sidebar/SidebarDelivery";

const Delivery = () => {
  const delivers = [
    {
      title: "Uber Eats",
      text: "Pide a domicilio tu bebida y comida Starbucks® preferida con Uber Eats",
      img: deliver1,
    },
    {
      title: "Glovo",
      text: "Te llevamos a casa tu bebida y comida Starbucks® preferida con Glovo",
      img: deliver2,
    },
  ];

  return (
    <>
    <SidebarDelivery />
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2>Disfruta tu experiencia Starbucks® donde quieras</h2>
          <h3 className={styles.secondIntro}>
            ¿Eres más de café, de smoothie, de latte o de Frappuccino®? ¡No
            esperes más y pide Starbucks a domicilio o para llevar! <br></br>
            <br></br>En Starbucks queremos estar cerca de ti y por eso te
            llevamos tus productos favoritos y tu café Starbucks® a domicilio.{" "}
            <br></br>
            <br></br>¡Empieza a disfrutar de todos nuestros productos Starbucks®
            donde quieras!
          </h3>
        </div>

        <div className={styles.delivers}>
          {delivers.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.img} />
              <div className={styles.cardText}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button>Pide ahora</button>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Delivery;
