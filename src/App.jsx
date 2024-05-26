import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

const Profile = () => {
  return <h1>Профиль</h1>;
};
const Messages = () => {
  return <h2>Заказы</h2>;
};
const Settings = () => {
  return <h2>Настройки</h2>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills">
            <a href="profile" className="nav-link">
              Профиль
            </a>
            <a href="orders" className="nav-link">
              Заказы
            </a>
            <a href="settings" className="nav-link">
              Настройки
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile" element={<Messages />} />
            <Route path="/profile" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
