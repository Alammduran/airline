import axios from "axios";
import FlightCard from "../../components/flight-card";
import PreBookingForm from "../../components/pre-booking-form";
import { API_URL } from "../../service/api";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Flights = () => {
  const { search } = useLocation();
  let origin = new URLSearchParams(search).getAll("origin");
  let destination = new URLSearchParams(search).getAll("destination");
  let departure_date = new URLSearchParams(search).getAll("departure_date");
  let passengers_numbers = new URLSearchParams(search).getAll(
    "passengers_numbers"
  );

  const [fligths, setFlights] = useState([]);
  const [fligthId, setFlightId] = useState();

  useEffect(() => {
    axios
      .get(
        API_URL +
          `api/get-flights?origin=${origin}&destination=${destination}&departure_date=${departure_date}`
      )
      .then((res) => {
        typeof res.data === "object" && setFlights(res.data.flights);
        res.data ? console.log(res.data) : console.log(res.data);
        // let schedules = res.data.schedules.map((element) => {
        //   return { value: element, text: moment(element).format("LLLL") };
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelected = (id) => {
    setFlightId(id);
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
        flightId={fligthId}
        passengers_numbers={passengers_numbers}
      />
      <Link to={"/"}>
        <button>Buscar nuevo vuelo</button>
      </Link>
    </>
  );
};

export default Flights;
