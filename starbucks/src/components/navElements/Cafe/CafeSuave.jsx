import Footer from "../../Footer/Footer";
import styles from "./cafe.module.css";
import suave from "../../../assets/suave.png";
import { CAFE } from "../../../route-paths";
import SidebarCafeSuave from "../../Sidebar/SidebarCafeSuave";

const CafeSuave = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <SidebarCafeSuave />

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.column}>
              <img src={suave} alt="bolsas de variedades de cafe" />
              <div>
                <h3 className={styles.title}>
                  Blonde Espresso Roast WHOLE BEAN
                </h3>
                <p className={styles.secondIntro}>
                  Basándonos en cinco décadas de arte cafetero, nos propusimos
                  crear un espresso que ofreciera un sabor más suave y
                  equilibrado en tu taza y que se combinara perfectamente con la
                  leche. Combinando granos selectos de distintas zonas de la
                  región de América Latina, y luego los tostamos cuidadosamente
                  para sacar sus notas dulces y vibrantes. El resultado es un{" "}
                  <strong>café deliciosamente redondo y muy versátil:</strong>{" "}
                  delicioso caliente o servido con hielo.
                </p>
              </div>
            </div>

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

export default CafeSuave;
