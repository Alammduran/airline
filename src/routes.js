import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Reservations from "./pages/reservations";
import Flights from "./pages/flights";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/vuelos" element={<Flights />} />
      <Route exact path="/reservaciones" element={<Reservations />} />
    </Routes>
  );
};

export default AppRoutes;
