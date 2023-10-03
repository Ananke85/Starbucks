import SidebarResp from "../../Sidebar/sidebarResp";
import styles from "./respons.module.css";
import resp1 from "../../../assets/resp1.jpg";
import resp2 from "../../../assets/resp2.jpg";
import resp3 from "../../../assets/resp3.jpg";
import resp4 from "../../../assets/resp4.jpg";
import Footer from "../../Footer/Footer";

const Responsability = () => {
  const responsabilities = [
    {
      title: "Fundación Starbucks®",
      text: "La Fundación Starbucks® fortalece a la humanidad transformando vidas en todo el mundo, centrándose en permitir que las comunidades sean resistentes y prosperen, y en elevar a las comunidades afectadas por desastres.",
      img: resp1,
      link: ["Proyectos solidarios en España"],
    },
    {
      title: "Abastecimiento ético",
      text: "El café no sería posible sin los agricultores de todo el mundo que lo cultivan. Por eso trabajamos junto a ellos para apoyar prácticas agrícolas sostenibles y a sus comunidades.",
      img: resp2,
      link: ["Abastecimiento ético", "Tolerancia cero con el trabajo infantil"],
    },
    {
      title: "Sostenibilidad",
      text: "Cuidar el medio ambiente es imprescindible para el futuro del café y de los caficultores, y para el mundo en que vivimos.",
      img: resp3,
      link: ["Liderar la sostenibilidad"],
    },
    {
      title: "Nuestros Informes",
      text: "Descubre cómo reforzamos y mejoramos nuestros objetivos.",
      img: resp4,
      link: ["Informe de impacto medioambiental y social"],
    },
  ];
  return (
    <>
      <SidebarResp />
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}>RESPONSABILIDAD</h3>
          <div className={styles.respons}>
            {responsabilities.map((item, index) => (
              <div key={index} className={styles.card}>
                <img src={item.img} />
                <div className={styles.cardText}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className={styles.line}></div>
                  {item.link.map((li) => (
                    <div key={li} className={styles.links}>
                      <p className={styles.greenText}>{li}</p>
                      <span className="icon-new-tab"></span>
                    </div>
                  ))}
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

export default Responsability;
