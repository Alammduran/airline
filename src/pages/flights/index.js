import axios from "axios";
import FlightCard from "../../components/flight-card";
import PreBookingForm from "../../components/pre-booking-form";
import { API_URL } from "../../service/api";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
      {fligths.length > 0 ? (
        <>
          <div className="help-text">
            <strong>
              *Confirme la pre-reserva en el formulario que esta hasta abajo
            </strong>
          </div>
          <div className="container-grid">
            {fligths.map((flight) => {
              return (
                <FlightCard
                  key={flight.id}
                  handleSelected={handleSelected}
                  flight={flight}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="help-text">
          <h2>No hay vuelos con esas especificaciones</h2>
        </div>
      )}
      <PreBookingForm
        selectedFlight={selectedFlight}
        passengerNumbers={passengersNumbers}
      />
    </>
  );
};

export default Flights;
