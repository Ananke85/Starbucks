import styles from "./sideBar.module.css";
import elaboracion from "../../assets/elaboracion.jpg";

const SidebarElab = () => {
  return (
    <>
      <div className={styles.containerElab}>
        <img src={elaboracion} alt="Vaso de café" />
        <h3>CÓMO PREPARAR CAFÉ STARBUCKS®</h3>
      </div>
    </>
  );
};

export default SidebarElab;