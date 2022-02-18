import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="empty-space"></div>
      <div className="container-menu">
        <Link to={"/"} className="menu-link">
          <h1>Aerolinea</h1>
        </Link>
        <ul>
          <Link to={"/"} className="menu-link">
            <li>Inicio</li>
          </Link>
          <Link to={"/reservaciones"} className="menu-link">
            <li>Mis reservaciones</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Menu;
