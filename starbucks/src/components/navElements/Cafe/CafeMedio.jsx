import Footer from "../../Footer/Footer";
import styles from "./cafe.module.css";
import { CAFE } from "../../../route-paths";
import medio1 from "../../../assets/medio1.png";
import medio2 from "../../../assets/medio2.png";
import medio3 from "../../../assets/medio3.png";
import medio4 from "../../../assets/medio4.png";
import medio5 from "../../../assets/medio5.png";
import medio6 from "../../../assets/medio6.png";
import SidebarCafeMedio from "../../Sidebar/SidebarCafeMedio";

const CafeMedio = () => {
  const cafes = [
    {
      title: "Pike Place Roast",
      des: "Desde nuestra primera tienda en el mercado de Pike Place Market de Seattle hasta nuestras cafeterías de todo el mundo, los clientes pedían un café recién hecho que pudieran disfrutar durante todo el día. En 2008, nuestros maestros mezcladores y tostadores crearon esto para todos los clientes: una mezcla suave y completa de cafés latinoamericanos con sabores ricos de chocolate y nueces tostadas.",
      resume: ["Cuerpo medio", "Acidez media", "Región América Latina"],
      img: medio1,
    },
    {
      title: "House Blend",
      des: "Una mezcla de granos de América Latina de acidez brillante, de tostado medio que le aporta un color castaño oscuro al grano de café. Cargado de sabor, con un sutil equilibrio de sabores a nuez y a cacao. Con un toque de dulzura que le aporta el tostado. Este café conmemora nuestras raíces, es la primera mezcla que creamos en 1971. Es un fiel reflejo de nosotros y de una deliciosa taza de café. Todo comienza desde aquí.",
      resume: ["Cuerpo medio", "Acidez media", "Región América Latina"],
      img: medio2,
    },
    {
      title: "Colombia Nariño",
      des: "Las notas de sabor que posee Colombia Nariño son un testimonio de la abundante riqueza de los suelos volcánicos. Su notable y característico sabor crea un grupo fieles de amantes del café. Nuestra relación con Nariño comenzó en 1990. Los cafés de Colombia Nariño son complejos y les hace ser perfecto para comenzar a catar cafés de Starbucks. Elegante con notas de herbales con un toque final a nuez. Sus sabores son únicos y procedentes de su región de origen de Nariño en Colombia.",
      resume: ["Cuerpo medio", "Acidez media", "Región América Latina"],
      img: medio3,
    },
    {
      title: "Guatemala Antigua",
      des: "Café con toques a cacao y especias sutiles. Elegante y refinado con notas de limón, chocolate y especias suaves. Este café se cultiva en Antigua, esta zona desbordante de vegetación del sur de Guatemala se encuentra entre tres volcanes. La elevada altitud y el suelo arcilloso crean unas condiciones prácticamente idóneas para caficultores y amantes del café por igual. Es por eso que nos encanta este café desde 1971.",
      resume: ["Cuerpo medio", "Acidez media", "Región América Latina"],
      img: medio4,
    },
    {
      title: "Kenya",
      des: "El Café Kenya es reconocible gracias a su característico sabor a cítricos y pomelo, que también deja entrever en ocasiones toques de limón y naranja amarga. Este café presenta un acidez brillante. Por ello, beberlo resulta tan sumamente refrescante. De hecho, es magnífico para tomarlo con hielo en un día caluroso de verano. Kenya sigue asombrando a nuestros expertos catadores y clientes desde 1971, con sabores exóticos, que ningún otro café posee.",
      resume: ["Cuerpo completo", "Acidez alta", "Región África"],
      img: medio5,
    },
    {
      title: "Ethiopia",
      des: "En Ethiopia, el café es mucho más que una bebida. La primera planta de café arábica creció aquí. Un antiguo proverbio etíope: 'Buna dabo Naw' se traduce como: 'El café es nuestro pan'. El café se comparte con la familia y amigos a través de ceremonias diarias de café, en los hogares donde los granos de café verde son cosechados, tostados, molidos finamente y luego elaborados en un Jebena (Cafetera Ethiope), en el que se sirve. Este café nos trae sabores cítricos y de cacao oscuro.",
      resume: ["Cuerpo completo ", "Acidez alta", "Región África"],
      img: medio6,
    },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarCafeMedio />

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

export default CafeMedio;
