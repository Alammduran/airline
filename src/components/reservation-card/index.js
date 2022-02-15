import React from "react";
import moment from "moment";
import "./style.css";
import { Link } from "react-router-dom";

const ReservationCard = ({
  reservation,
  cancelReservation,
  wasBooked = false,
}) => {
  const {
    id,
    origin,
    destination,
    departure_date,
    total_price,
    passengers_numbers,
  } = reservation;
  return (
    <div className="card__grid">
      <article>
        <img src="/assets/img/wishlist.svg" alt="Card" />

        <div className="card__content">
          <div>
            <p>
              <strong>Origen: </strong> {origin}
            </p>
            <p>
              <strong>Destino: </strong> {destination}
            </p>
          </div>

          <div>
            <p>
              <strong>Total a pagar: </strong>
              {total_price.toLocaleString("es-MX", {
                style: "currency",
                currency: "MXN",
                minimumFractionDigits: "2",
              })}
            </p>
            <p>
              <strong>Pasajeros: </strong> {passengers_numbers}
            </p>
            <p>
              <strong>Fecha: </strong> {moment(departure_date).format("LLLL")}
            </p>
          </div>
          {!wasBooked && (
            <>
              <Link to={`/reservar?reservacion=${reservation.id}`}>
                <button className="nomal-button">Reservar</button>
              </Link>
              <button
                className="cancel-button"
                onClick={() => cancelReservation(id)}
              >
                Cancelar
              </button>
            </>
          )}
        </div>
      </article>
    </div>
  );
};

export default ReservationCard;
