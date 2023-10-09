import styles from "./sideBar.module.css";
import cafe from "../../assets/cafe_medio.jpg";

const SidebarCafeMedio = () => {
  return (
    <>
      <div className={styles.containerCafe}>
        <img src={cafe} alt="Granos de café" />
        <h3>NUESTRO CAFÉ</h3>
        <h2>Tostado medio</h2>
      </div>
    </>
  );
};

export default SidebarCafeMedio;