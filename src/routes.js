import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Reservations from "./pages/reservations";


const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/mis-reservaciones" element={<Reservations />} />
    </Routes>
  );
};

export default AppRoutes;
