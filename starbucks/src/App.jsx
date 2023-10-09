import { Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import {
  CAFE,
  CAFE_MEDIO,
  CAFE_OSCURO,
  CAFE_SUAVE,
  CARTA,
  CREATE,
  DELIVERY,
  HOME,
  LOCATION,
  LOGIN,
  MERCHAN,
  RESP,
  REWARDS,
} from "./route-paths";
import Carta from "./components/navElements/Carta/Carta";
import Cafe from "./components/navElements/Cafe/Cafe";
import Delivery from "./components/navElements/Delivery/Delivery";
import Responsability from "./components/navElements/Responsability/Responsability";
import Merchandising from "./components/navElements/Merchan/Merchan";
import Rewards from "./components/navElements/Rewards/Rewards";
import CafeSuave from "./components/navElements/Cafe/CafeSuave";
import CafeMedio from "./components/navElements/Cafe/CafeMedio";
import CafeIntenso from "./components/navElements/Cafe/CafeIntenso";

function App() {
  return (
    <>
      <div className="appContainer">
        <NavBar />

        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={CARTA} element={<Carta />} />
          <Route path={CAFE} element={<Cafe />} />
          <Route path={CAFE_SUAVE} element={<CafeSuave />} />
          <Route path={CAFE_MEDIO} element={<CafeMedio />} />
          <Route path={CAFE_OSCURO} element={<CafeIntenso />} />

          <Route path={DELIVERY} element={<Delivery />} />
          <Route path={RESP} element={<Responsability />} />
          <Route path={MERCHAN} element={<Merchandising />} />
          <Route path={REWARDS} element={<Rewards />} />

          {/* <Route path={LOCATION} element={<Store/>} />
<Route path={LOGIN} element={<Login/>} />
<Route path={CREATE} element={<Reister/>} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
