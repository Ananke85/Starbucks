import { Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import {
  BEBIDAS,
  CAFE,
  CAFE_MEDIO,
  CAFE_OSCURO,
  CAFE_SUAVE,
  CARTA,
  COMIDAS,
  CREATE,
  DELIVERY,
  ELABORAR,
  HOME,
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
import Bebidas from "./components/navElements/Carta/Bebidas";
import Comidas from "./components/navElements/Carta/Comidas";
import Login from "./components/navElements/Login/Login";
import Register from "./components/navElements/Login/Register";
import Elaboracion from "./components/navElements/Cafe/Elaboracion";

function App() {
  return (
    <>
      <div className="appContainer">
        <NavBar />

        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={CARTA} element={<Carta />} />
          <Route path={BEBIDAS} element={<Bebidas />} />
          <Route path={COMIDAS} element={<Comidas />} />

          <Route path={CAFE} element={<Cafe />} />
          <Route path={CAFE_SUAVE} element={<CafeSuave />} />
          <Route path={CAFE_MEDIO} element={<CafeMedio />} />
          <Route path={CAFE_OSCURO} element={<CafeIntenso />} />
          <Route path={ELABORAR} element={<Elaboracion />} />

          <Route path={DELIVERY} element={<Delivery />} />
          <Route path={RESP} element={<Responsability />} />
          <Route path={MERCHAN} element={<Merchandising />} />
          <Route path={REWARDS} element={<Rewards />} />

          <Route path={LOGIN} element={<Login />} />
          <Route path={CREATE} element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
