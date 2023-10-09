import styles from "./sideBar.module.css";
import cafe from "../../assets/cafe.png";
import pdf from "../../assets/InformacionFall23_ESP.pdf";

const SidebarCafe = () => {
  return (
    <>
      <div className={styles.containerCafe}>
        <img src={cafe} alt="Granos de café" />

        <h3>NUESTROS CAFÉS</h3>
        <div className={styles.buttonsCafe}>
          <button>Cómo preparar café Starbucks®</button>
          {/* <button>Autumn Blend</button> */}
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
