import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Reservations from "./pages/reservations";
import Flights from "./pages/flights";
import Book from "./pages/book";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/vuelos" element={<Flights />} />
      <Route exact path="/reservaciones" element={<Reservations />} />
      <Route exact path="/reservar" element={<Book />} />
    </Routes>
  );
};

export default AppRoutes;
