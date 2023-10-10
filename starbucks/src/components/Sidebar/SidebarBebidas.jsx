import styles from "./sideBar.module.css";
import bebidas from "../../assets/bebidas.png";

const SidebarBebidas = () => {
  return (
    <>
      <div className={styles.containerCafe}>
        <img src={bebidas} alt="Sirviendo café" />
        <h3>CARTA</h3>
        <h2>Bebidas</h2>
      </div>
    </>
  );
};

export default SidebarBebidas;