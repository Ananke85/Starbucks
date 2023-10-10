import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import {
  CAFE,
  CARTA,
  DELIVERY,
  HOME,
  LOGIN,
  MERCHAN,
  RESP,
  REWARDS,
} from "../../route-paths";
import logo from "../../assets/starbucks_logo.png"

const NavBar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
        <Link to={HOME}>
          <img src={logo} alt="Starbucks logo" />
        </Link>
        <Link to={CARTA}> Carta </Link>
        <Link to={CAFE}>Café</Link>
        <Link to={DELIVERY}>Delivery</Link>
        <Link to={RESP}>Responsabilidad</Link>
        <Link to={MERCHAN}>Merchandising</Link>
        <Link to={REWARDS}>Rewards</Link>
        </div>

        <div className={styles.buttons}>
          <button className={styles.location}><span className="icon-location1"></span>  Encuéntranos</button>
          <Link to={LOGIN}><button>Inicia Sesión</button></Link>
          <button className={styles.black}>Únete Ahora</button>

        </div>
        
      </div>
    </>
  );
};

export default NavBar;
