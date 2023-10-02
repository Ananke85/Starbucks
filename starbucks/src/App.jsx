import { Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import { CAFE, CARTA, CREATE, DELIVERY, HOME, LOCATION, LOGIN, MERCHAN, RESP, REWARDS } from "./route-paths";
import Carta from "./components/navElements/Carta/Carta";
import Cafe from "./components/navElements/Cafe/Cafe";
import Delivery from "./components/navElements/Delivery/Delivery";
import Responsability from "./components/navElements/Responsability/Responsability";
import Merchandising from "./components/navElements/Merchan/Merchan";
import Rewards from "./components/navElements/Rewards/Rewards";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <NavBar />
      <Sidebar />

      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={CARTA} element={<Carta />} />
        <Route path={CAFE} element={<Cafe />} />
        <Route path={DELIVERY} element={<Delivery />} />
        <Route path={RESP} element={<Responsability />} />
        <Route path={MERCHAN} element={<Merchandising />} />
        <Route path={REWARDS} element={<Rewards />} />

        {/* <Route path={LOCATION} element={<Store/>} />
        <Route path={LOGIN} element={<Login/>} />
        <Route path={CREATE} element={<Reister/>} /> */}

      </Routes>
    </>
  );
}

export default App;
