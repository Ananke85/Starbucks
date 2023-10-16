import { CAFE } from "../../../route-paths";
import Footer from "../../Footer/Footer";
import styles from "./cafe.module.css";
import elaboracion1 from "../../../assets/elaboracion1.png";
import elaboracion2 from "../../../assets/elaboracion2.png";
import elaboracion3 from "../../../assets/elaboracion3.png";
import SidebarElab from "../../Sidebar/SidebarElab";

const Elaboracion = () => {
  const elaboraciones = [
    {
      title: "Cafetera de émbolo",
      steps: [
        {
          title: "Moler y medir",
          des: "Utiliza una cafetera de émbolo con café molido grueso parecido a sal marina y añade 2 cucharadas por cada 170 ml de agua.",
          sugg: "Recuerda que el café es como un producto fresco. Cómpralo con frecuencia en pequeñas cantidades para disfrutar toda su frescura.",
        },
        {
          title: "Añade agua caliente",
          des: "Llena la cafetera de émbolo con agua caliente recién hervida. Asegúrate de impregnar todos los posos.",
          sugg: "Para que tu café tenga el mejor sabor posible, utiliza agua filtrada o embotellada.",
        },
        {
          title: "Colocar el émbolo y elaborar",
          des: "Vuelve a colocar el émbolo en la cafetera sin presionarlo y deja que el café se elabore durante 4 minutos.",
        },
        {
          title: "Presionar y servir",
          des: "Presiona suavemente el émbolo hasta que llegue a la parte inferior de la cafetera y disfruta.",
        },
      ],
      img: elaboracion1,
    },
    {
      title: "Vertido",
      steps: [
        {
          title: "Moler y medir",
          des: "Utiliza una cafetera de émbolo con café molido grueso parecido a sal marina y añade 2 cucharadas por cada 170 ml de agua.",
          sugg: "Recuerda que el café es como un producto fresco. Cómpralo con frecuencia en pequeñas cantidades para disfrutar toda su frescura.",
        },
        {
          title: "Añade agua caliente",
          des: "Llena la cafetera de émbolo con agua caliente recién hervida. Asegúrate de impregnar todos los posos.",
          sugg: "Para que tu café tenga el mejor sabor posible, utiliza agua filtrada o embotellada.",
        },
        {
          title: "Colocar el émbolo y elaborar",
          des: "Vuelve a colocar el émbolo en la cafetera sin presionarlo y deja que el café se elabore durante 4 minutos.",
        },
        {
          title: "Presionar y servir",
          des: "Presiona suavemente el émbolo hasta que llegue a la parte inferior de la cafetera y disfruta.",
        },
      ],
      img: elaboracion2,
    },
    {
      title: "Cafetera",
      steps: [
        {
          title: "Elige la molienda adecuada",
          des: "En el caso de un filtro de fondo plano, utiliza una molienda media similar a la sal marina. Los filtros cónicos utilizan una molienda más fina similar al azúcar granulado.",
        },
        {
          title: "Medir",
          des: "Usa 2 cucharadas de café recién molido por cada 170 ml de agua.",
        },
        {
          title: "Elaborar y disfrutar",
          des: "El café elaborado siempre sabe mejor recién hecho.",
          sugg: "Se recomienda preparar la cantidad que puedas disfrutar en una sesión. El café recalentado puede perder sabor.",
        },
      ],
      img: elaboracion3,
    },
  ];

  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarElab />

        <div className={styles.container}>
          <div className={styles.contentElab}>
            <h3>
              Es sorprendente cómo los distintos métodos de elaboración pueden
              realzar características concretas de su café. Ayúdenos a explotar
              todo el potencial de su café, para que cada taza sea perfecta. Te
              contamos <strong>cómo preparar tu café de Starbucks®</strong> perfecto según la
              cafetera que utilices:
            </h3>
            <div className={styles.blank}></div>
            {elaboraciones.map((elaboracion, index) => (
              <div key={index} className={styles.columnElab}>
                <img
                  src={elaboracion.img}
                  alt="bolsas de variedades de cafe"
                  className={styles.elaboraciones}
                />
                <div>
                  <h3 className={styles.title}>{elaboracion.title}</h3>
                  <ol className={styles.noListStyle}>
                    {elaboracion.steps.map((elab, subIndex) => (
                      <li key={subIndex} className={styles.titleElab}>
                        {elab.title}
                        <p className={styles.nonBold}>{elab.des}</p>
                        {elab.sugg && (
                          <p className={styles.nonBold}>
                            SUGERENCIA: {elab.sugg}{" "}
                          </p>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className={styles.line}></div>
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

export default Elaboracion;
