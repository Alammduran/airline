import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { API_URL } from "../../service/api";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import ReservationCard from "../../components/reservation-card";

const Book = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  let reservationId = new URLSearchParams(search).getAll("reservacion");
  const [bookingInfo, setBookingInfo] = useState({
    full_name: "",
    last_name: "",
    address: "",
    email: "",
  });
  const [disable, setDisable] = useState(true);
  const [successfullyBooking, setSuccessfullyBooking] = useState(false);
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + `api/get-reservation?id=${reservationId}`)
      .then((res) => {
        setReservation(res.data.booking);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const { full_name, last_name, address, email } = bookingInfo;

    if (
      full_name.trim() === "" ||
      last_name.trim() === "" ||
      address.trim() === "" ||
      email.trim() === ""
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [bookingInfo]);

  const handleChange = (e) => {
    setBookingInfo({
      ...bookingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(reservationId);
    axios
      .post(API_URL + "api/booking", { id: reservationId.toString() })
      .then((res) => {
        setSuccessfullyBooking(true);
        setTimeout(() => {
          navigate("/reservaciones", { replace: true });
        }, 4000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container__flex">
      {successfullyBooking ? (
        <>
          <h2>Gracias por tu reserva!</h2>
          <div className="container__flex">
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
              wasBooked={true}
            />
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="reservation__form ">
          <strong>*Complete los datos para reservar el vuelo</strong>
          <Input
            label="Nombre completo"
            name="full_name"
            handleChange={handleChange}
          />
          <Input
            label="Apellidos"
            name="last_name"
            handleChange={handleChange}
          />
          <Input label="Dirección" name="address" handleChange={handleChange} />
          <Input
            label="Correo electrónico"
            name="email"
            handleChange={handleChange}
          />
          {disable ? (
            <button className="disable-button" disabled>
              Reservar
            </button>
          ) : (
            <button type="submit" className="nomal-button">
              Reservar
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default Book;
