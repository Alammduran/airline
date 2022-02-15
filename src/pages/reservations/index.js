import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../service/api";
import ReservationCard from "../../components/reservation-card";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(API_URL + `api/get-booking?token=${token}`)
      .then((res) => {
        setReservations(res.data.bookings);
        setTotalPrice(res.data.totalPrice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cancelReservation = (id) => {
    axios
      .post(API_URL + "api/cancel-booking", { id: id })
      .then((res) => {
        axios
          .get(API_URL + `api/get-booking?token=${token}`)
          .then((res) => {
            setReservations(res.data.bookings);
            setTotalPrice(res.data.totalPrice);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p className="simple-padding-bottom simple-container-x">
        <strong>Precio Total de todas reservaciones: </strong>
        {totalPrice.toLocaleString("es-MX", {
          style: "currency",
          currency: "MXN",
          minimumFractionDigits: "2",
        })}
      </p>
      <div className="container__grid">
        {reservations.length > 0 ? (
          reservations.map((reservation) => {
            return (
              <>
                <ReservationCard
                  key={reservation.id}
                  cancelReservation={cancelReservation}
                  reservation={reservation}
                />
              </>
            );
          })
        ) : (
          <h2 className="simple-padding-bottom simple-container-x">
            Todavía no cuentas con algúna pre-reservación
          </h2>
        )}
      </div>
    </div>
  );
};

export default Reservations;
