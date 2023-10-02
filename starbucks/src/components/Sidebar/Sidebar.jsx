import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.title}>
            
              <h1>STARBUCKS <br></br>REWARDS</h1>
              </div>

            <div className={styles.plainText}>
              <h2>Haz que tus días </h2>
              <h2 className={styles.brillar}>brillen más</h2>
              <h3>
                <strong>Gana Estrellas</strong> con cada compra <br></br> y consigue
                bebidas gratis.
              </h3>
            </div>
        </div>
        <div className={styles.star}></div>
      </div>
    </>
  );
};

export default Sidebar;
