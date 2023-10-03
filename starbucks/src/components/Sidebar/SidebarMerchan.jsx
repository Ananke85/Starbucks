import styles from "./sideBar.module.css";
import merchan from "../../assets/merchandising.png";

const SidebarMerchan = () => {
  return (
    <>
      <div className={styles.containerMerchan}>
        <img src={merchan} alt="Tazas Starbucks" />
        <h3>MERCHANDISING</h3>
      </div>
    </>
  );
};

export default SidebarMerchan;
