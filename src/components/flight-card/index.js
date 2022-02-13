import React from "react";
import moment from "moment";

const FlightCard = ({ flight, handleSelected }) => {
  const { id, origin, destination, departure_date, price } = flight;
  return (
    <div className="container__box">
      <p>{id}</p>
      <p>{origin}</p>
      <p>{destination}</p>
      <p>{moment(departure_date).format("LLLL")}</p>
      <p>
        {price.toLocaleString("es-MX", {
          style: "currency",
          currency: "MXN",
          minimumFractionDigits: "2",
        })}
      </p>
      <button onClick={() => handleSelected(id)}>Pre-reservar</button>
    </div>
  );
};

export default FlightCard;
