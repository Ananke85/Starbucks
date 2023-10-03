import styles from "./sideBar.module.css";
import logo from "../../assets/logo_letters.png";

const SidebarResp = () => {
  return (
    <>
      <div className={styles.containerResp}>
        <img src={logo} alt="Starbucks logo" />
        <h3>RESPONSABILIDAD STARBUCKS</h3>{" "}
      </div>
    </>
  );
};

export default SidebarResp;
