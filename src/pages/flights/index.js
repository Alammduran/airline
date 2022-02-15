import axios from "axios";
import FlightCard from "../../components/flight-card";
import PreBookingForm from "../../components/pre-booking-form";
import { API_URL } from "../../service/api";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Flights = () => {
  const { search } = useLocation();
  let origin = new URLSearchParams(search).getAll("origin");
  let destination = new URLSearchParams(search).getAll("destination");
  let departureDate = new URLSearchParams(search).getAll("departure_date");
  let passengersNumbers = new URLSearchParams(search).getAll(
    "passengers_numbers"
  );

  const [fligths, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState([]);

  useEffect(() => {
    axios
      .get(
        API_URL +
          `api/get-flights?origin=${origin}&destination=${destination}&departure_date=${departureDate}`
      )
      .then((res) => {
        typeof res.data === "object" && setFlights(res.data.flights);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelected = (selectedFlight) => {
    setSelectedFlight(selectedFlight);
  };
  return (
    <>
      {fligths.length > 1 ? (
        fligths.map((flight) => {
          return (
            <FlightCard
              key={flight.id}
              handleSelected={handleSelected}
              flight={flight}
            />
          );
        })
      ) : (
        <h2>No hay vuelos con esas especificaciones</h2>
      )}
      <PreBookingForm
        selectedFlight={selectedFlight}
        passengerNumbers={passengersNumbers}
      />
      <section className="container__sm">
        <Link to={"/"}>
          <button>Buscar nuevo vuelo</button>
        </Link>
      </section>
    </>
  );
};

export default Flights;
