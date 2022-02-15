import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../service/api";
import { Link } from "react-router-dom";

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

  const cancelReservation = () => {
    axios
      .post(API_URL + `api/cancel-booking?id=${token}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {totalPrice}
      <h1>Reservations</h1>
      {reservations.map((reservation) => {
        return (
          <>
            <Link to={`/reservar?reservacion=${reservation.id}`}>
              {reservation.origin}
            </Link>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default Reservations;
