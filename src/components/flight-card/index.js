import React from "react";
import moment from "moment";

const FlightCard = ({ flight, handleSelected }) => {
  const { origin, destination, departure_date, price } = flight;
  return (
    <div className="card-grid">
      <article>
        <img src="/assets/img/card.svg" alt="Card" />

        <div className="card-content">
          <div>
            <p>
              <strong>Origen:</strong> {origin}
            </p>
            <p>
              <strong>Destino:</strong> {destination}
            </p>
          </div>

          <div>
            <p>
              <strong>Precio</strong>
              {price.toLocaleString("es-MX", {
                style: "currency",
                currency: "MXN",
                minimumFractionDigits: "2",
              })}
            </p>
            <p>
              <strong>Fecha:</strong> {moment(departure_date).format("LLLL")}
            </p>
          </div>

          <button
            className="nomal-button"
            onClick={() => handleSelected(flight)}
          >
            Seleccionar vuelo
          </button>
        </div>
      </article>
    </div>
  );
};

export default FlightCard;
