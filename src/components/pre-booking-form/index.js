import React, { useState, useEffect } from "react";
import Select from "../select";
import axios from "axios";
import { API_URL } from "../../service/api";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const PreBookingForm = ({ selectedFlight, passengerNumbers }) => {
  const {
    id,
    origin,
    destination,
    departure_date: departure_date_selected,
    price,
  } = selectedFlight;

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [hasPassengersNumbers, setHasPassengersNumbers] = useState(
    passengerNumbers.toString() !== "" ? passengerNumbers.toString() : 0
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let calculatePrice = price
      ? price * hasPassengersNumbers
      : 0 * hasPassengersNumbers;
    setTotalPrice(calculatePrice);
  }, [price, hasPassengersNumbers]);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setHasPassengersNumbers(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    if (!token) {
      token = (Math.random() + 1).toString(36).substring(7);
      localStorage.setItem("token", token);
    }
    axios
      .post(API_URL + `api/pre-booking`, {
        flight_id: selectedFlight.id,
        passengers_numbers: hasPassengersNumbers,
        token: token,
      })
      .then((res) => {
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card__grid">
      <article>
        <h2 className="text-center simple-padding-top">Vuelo Seleccionado</h2>

        <div className="card__content">
          <div>
            <p>
              <strong>Origen:</strong>
              {origin ? origin : "-"}
            </p>
            <p>
              <strong>Destino:</strong>
              {destination ? destination : "-"}
            </p>
          </div>

          <div>
            <p>
              <strong>Total a pagar:</strong>
              {price
                ? totalPrice.toLocaleString("es-MX", {
                    style: "currency",
                    currency: "MXN",
                    minimumFractionDigits: "2",
                  })
                : "-"}
            </p>
            <p>
              <strong>Fecha:</strong>
              {departure_date_selected
                ? moment(departure_date_selected).format("LLLL")
                : "-"}
            </p>
          </div>

          <form onSubmit={handleSumbit}>
            <input type="hidden" name="flight_id" value={id && id} />
            <Select
              name="passengers_numbers"
              label="Pasajeros:"
              options={numbers}
              handleChange={handleInputChange}
              isArrayWithoutKeys={true}
              defaultValue={hasPassengersNumbers}
            />
            <button className="nomal-button" type="submit">
              Pre-reservar
            </button>
          </form>
        </div>
      </article>
    </div>
  );
};

export default PreBookingForm;
