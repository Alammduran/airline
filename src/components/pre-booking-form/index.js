import React, { useState, useEffect } from "react";
import Select from "../select";
import axios from "axios";
import { API_URL } from "../../service/api";
import { useNavigate } from "react-router-dom";

const PreBookingForm = ({ selectedFlight, passengerNumbers }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [hasPassengersNumbers, setHasPassengersNumbers] = useState(
    passengerNumbers.toString() !== "" && passengerNumbers.toString()
  );
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
    <div className="container__flex">
      <form onSubmit={handleSumbit}>
        <input
          type="hidden"
          name="flight_id"
          value={selectedFlight && selectedFlight.id}
        />
        <Select
          name="passengers_numbers"
          label="Pasajeros:"
          options={numbers}
          handleChange={handleInputChange}
          isArrayWithoutKeys={true}
          defaultValue={hasPassengersNumbers}
        />
        <button type="submit">Pre-reservar</button>
      </form>
    </div>
  );
};

export default PreBookingForm;
