import styles from "./sideBar.module.css"
import delivery from "../../assets/delivery.png"

const SidebarDelivery = () => {
  return (
    <>
      <div className={styles.containerPhoto}>
        <img src={delivery} alt="Granos de café" />

        <h3>DELIVERY</h3>
        
      </div>
    </>
  );
};

export default SidebarDelivery;