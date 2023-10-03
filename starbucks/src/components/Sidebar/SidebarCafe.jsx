import styles from "./sideBar.module.css";
import cafe from "../../assets/cafe.png";

const SidebarCafe = () => {
  return (
    <>
      <div className={styles.containerCafe}>
        <img src={cafe} alt="Granos de café" />

        <h3>NUESTROS CAFÉS</h3>
        <div className={styles.buttonsCafe}>
          <button>Cómo preparar café Starbucks®</button>
          <button>Autumn Blend</button>
        </div>
      </div>
    </>
  );
};

export default SidebarCafe;
