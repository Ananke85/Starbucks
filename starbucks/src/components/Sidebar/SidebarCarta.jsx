import styles from "./sideBar.module.css";
import carta from "../../assets/carta.png";

const SidebarCarta = () => {
  return (
    <>
      <div className={styles.containerPhoto}>
        <img src={carta} alt="Frapuccino y pancake" />
        <h3>CARTA</h3>
        <div className={styles.buttonsCarta}>
          <button>Información Nutricional</button>
        </div>
      </div>
    </>
  );
};

export default SidebarCarta;
