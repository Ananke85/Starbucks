import Footer from "../../Footer/Footer";
import SidebarCafe from "../../Sidebar/SidebarCafe";
import styles from "./cafe.module.css";
import bolsas from "../../../assets/bolsas.png";
import blend from "../../../assets/blend.jpg";
import pdf from "../../../assets/InformacionFall23_ESP.pdf";
import { CAFE_MEDIO, CAFE_OSCURO, CAFE_SUAVE } from "../../../route-paths";

const Cafe = () => {
  const cafes = [
    {
      title: "café tostado suave",
      des: "Suaves y equilibrados, nuestros cafés de tueste medio son perfectos para cada pausa para el café.",
      link: CAFE_SUAVE,
    },
    {
      title: "café tostado medio",
      des: "Con cuerpo y rico, estos cafés presentan sabores robustos y la esencia característica de un tueste profundo.",
      link: CAFE_MEDIO,
    },
    {
      title: "café tostado intenso",
      des: "Con su cuerpo denso y aroma enérgico, estos cafés se caracterizan por un tostado más marcado que potencia los sabores específicos de los granos arábiga.",
      link: CAFE_OSCURO,
    },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
          <SidebarCafe />

        <div className={styles.container}>
          <img src={bolsas} alt="bolsas de variedades de cafe" />

          <div className={styles.content}>
            <div className={styles.intro}>
              <h3 className={styles.title}>NUESTROS CAFÉS</h3>
              <h3 className={styles.secondIntro}>
                En Starbucks®, siempre se ha tratado y siempre se tratará de
                calidad. Nuestra pasión por el café solo se compara con nuestro
                amor por compartirlo. <br></br>
                <br></br>Ya sea que esté bebiendo solo o recibiendo invitados,
                disfrutar del café en casa debe ser una experiencia relajante,
                calmante y conmovedora.<br></br>
                <br></br>Con tantas opciones, es difícil encontrar la taza
                perfecta.
              </h3>
            </div>

            <div className={styles.blendContainer}>
              <img src={blend} alt="Autumn Blend" />
              <div className={styles.blend}>
                <h3>
                  Autumn Blend: Sabor intenso, herbal y con un toque dulce a
                  higos secos
                </h3>
                <p>
                  Un favorito de siempre, Starbucks Autumn Blend reúne tres
                  cafés increíbles en una mezcla armoniosa para hacer más
                  cálidos los días fríos y acompañar las comidas más
                  sustanciosas del otoño. Con granos del Gran Valle del Rift en
                  África, Sumatra y la región de Antigua en Guatemala, Starbucks
                  Autumn Blend muestra los sabores de las principales regiones
                  cafeteras del mundo.
                </p>
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button>Descúbrelo</button>
                </a>
              </div>
            </div>

            <div className={styles.cafesList}>
              <h3 className={styles.title}>EL ESPECTRO DE STARBUCKS ROAST™</h3>
              <h3 className={styles.introBlack}>
                Nuestros cafés se clasifican en tres perfiles de tueste, para
                que pueda encontrar fácilmente el sabor y la intensidad
                adecuados para usted.
              </h3>
              <h3 className={styles.secondIntro}>
                Con un cuerpo más ligero y suave, los cafés Starbucks® Blonde
                Roast despiertan suavemente los sentidos y ofrecen una taza
                accesible y sabrosa con ligeras notas tostadas.
              </h3>
              {cafes.map((item, index) => (
                <div key={index} className={styles.cafes}>
                  <a href={item.link}>
                    <h3 className={styles.titleCafe}>{item.title}</h3>
                  </a>

                  <p>{item.des}</p>
                </div>
              ))}
              <div className={styles.buttonsCafe}>
                <a
                  href={CAFE_SUAVE}
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button>Tostado Suave</button>
                </a>
                <a
                  href={CAFE_MEDIO}
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button>Tostado Medio</button>
                </a>
                <a
                  href={CAFE_OSCURO}
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button>Tostado Intenso</button>
                </a>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Cafe;
