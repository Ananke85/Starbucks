import styles from "./sideBar.module.css";
import cafe from "../../assets/cafe.png";
import pdf from "../../assets/InformacionFall23_ESP.pdf";
import { ELABORAR } from "../../route-paths";

const SidebarCafe = () => {
  return (
    <>
      <div className={styles.containerCafe}>
        <img src={cafe} alt="Granos de café" />

        <h3>NUESTROS CAFÉS</h3>
        <div className={styles.buttonsCafe}>
          <a
            href={ELABORAR}
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button>Cómo preparar café Starbucks®</button>
          </a>
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className={styles.linkButton}>Autumn Blend</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default SidebarCafe;
