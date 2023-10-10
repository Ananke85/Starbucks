import Footer from "../../Footer/Footer";
import styles from "./cafe.module.css";
import { CAFE } from "../../../route-paths";
import intenso1 from "../../../assets/intenso1.png";
import intenso2 from "../../../assets/intenso2.png";
import intenso3 from "../../../assets/intenso3.png";
import SidebarCafeIntenso from "../../Sidebar/SidebarCafeIntenso";

const CafeIntenso = () => {
  const cafes = [
    {
      title: "Espresso Roast y Decaf Espresso Roast",
      des: "Se trata de una mezcla especial de granos de Latinoamérica y Asia/Pacífico, con un tostado intenso que produce un café dulce, aromático y acaramelado. Como este café denso y cargado de cuerpo tiene un sabor intenso que destaca de la leche, constituye la base idónea para elaborar un latte o cappuccino en casa. Esta mezcla fue desarrolla a finales de la década de los 70. La búsqueda se inició en 1975 con la búsqueda de la fusión perfecta de bayas y tostado. *Resulta difícil diferenciar el café Espresso roast con cafeína del descafeinado. Nuestras versión descafeinada ofrecen el mismo sabor inigualable y la misma calidad, pero con menos cafeína.",
      resume: [
        "Cuerpo completo",
        "Acidez media",
        "Región América Latina / Asia Pacífico",
      ],
      img: intenso1,
    },
    {
      title: "Caffè Verona",
      des: "Caffè Verona® es una mezcla seductora de granos procedentes de Latinoamérica e Indonesia, equilibrado y rico con aromas de cacao oscuro. Como esta deliciosa combinación marida tan bien con el chocolate, se ha convertido en un favorito del Día de San Valentín, y el café que más asociamos con el romanticismo. P.D.: los amantes de la literatura reconocerán el nombre Verona como la ciudad donde Shakespeare sitúa a Romeo y Julieta y su historia de amor. ",
      resume: [
        "Cuerpo completo",
        "Acidez media",
        "Región América Latina / Asia Pacífico",
      ],
      img: intenso2,
    },
    {
      title: "Sumatra",
      des: "Procedente de la zona de Sumatra, dentro de la región Asia pacífico, tiene un cuerpo denso y cremoso sin prácticamente ninguna acidez, lo que permite que el sabor y la intensidad del café permanezcan en el paladar. Son evidentes las notas herbales concentradas y su aroma terroso, marcas distintivas que este café delicioso nos ha dejado en el corazón.",
      resume: ["Cuerpo completo", "Acidez baja", "Región Asia Pacífico"],
      img: intenso3,
    },
  ];

  
  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarCafeIntenso />

        <div className={styles.container}>
          <div className={styles.content}>
            {cafes.map((cafe, index) => (
              <div key={index} className={styles.column}>
                <img src={cafe.img} alt="bolsas de variedades de cafe" />
                <div>
                  <h3 className={styles.title}>{cafe.title}</h3>
                  <p className={styles.secondIntro}>{cafe.des}</p>

                  {cafe.resume.map((res, subIndex) => (
                    <ul key={subIndex}>
                      <li>{res}</li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}

            <a
              href={CAFE}
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button>Nuestros cafés</button>
            </a>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CafeIntenso;
