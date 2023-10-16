import styles from "./sidebar.module.css";
import coffee from "../../assets/coffee.png";
import { REWARDS } from "../../route-paths";

const SidebarHome = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.title}>
            <h1>
              STARBUCKS <br></br>REWARDS
            </h1>
          </div>

          <div className={styles.plainText}>
            <h2>Haz que tus días </h2>
            <h2 className={styles.brillar}>brillen más</h2>
            <h3>
              <strong>Gana Estrellas</strong> con cada compra <br></br> y
              consigue bebidas gratis.
            </h3>
          </div>
          <img src={coffee} alt="coffee app rewards" />

        </div>
        <div className={styles.buttons}>
          <button>Descarga la APP</button>

          <a
            href={REWARDS}
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button>Descubre Starbucks Rewards</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default SidebarHome;
