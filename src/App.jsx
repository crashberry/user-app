import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Orders } from "./components/Orders";
import { Settings } from "./components/Settings";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills">
            <NavLink to="profile" className="nav-link">
              Профиль
            </NavLink>
            <NavLink to="orders" className="nav-link">
              Заказы
            </NavLink>
            <NavLink to="settings" className="nav-link">
              Настройки
            </NavLink>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/" element={<h2>Вы – в личном кабинете, меню выбора – слева</h2>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
