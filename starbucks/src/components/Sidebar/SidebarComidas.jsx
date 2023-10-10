import styles from "./sideBar.module.css";
import comidas from "../../assets/comidas.png";

const SidebarComidas = () => {
  return (
    <>
      <div className={styles.containerCafe}>
        <img src={comidas} alt="Croissants" />
        <h3>CARTA</h3>
        <h2>Dulces y Salados</h2>
      </div>
    </>
  );
};

export default SidebarComidas;