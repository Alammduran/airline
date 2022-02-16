import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="empty__space"></div>
      <div className="container__menu">
        <Link to={"/"} className="container__menu__ul__link">
          <h1>Aerolinea</h1>
        </Link>
        <ul className="container__menu__ul">
          <Link to={"/"} className="container__menu__ul__link">
            <li>Inicio</li>
          </Link>
          <Link to={"/reservaciones"} className="container__menu__ul__link">
            <li>Mis reservas</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Menu;
