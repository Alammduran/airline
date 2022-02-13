import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../service/api";
import { headers } from "../../helpers/headers";
import moment from "moment";
import "moment/locale/es";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  const [schedules, setSchedules] = useState([
    {
      value: "",
      text: "",
    },
  ]);
  const [filters, setFilters] = useState({
    orign: "",
    destination: "",
    departure_date: "",
    passengers_numbers: "",
  });

  useEffect(() => {
    axios
      .get(API_URL + "api/get-schedule")
      .then((res) => {
        let schedules = res.data.schedules.map((element) => {
          return { value: element, text: moment(element).format("LLLL") };
        });
        setSchedules(schedules);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const setState = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { orign, destination, departure_date, passengers_numbers } = filters;
    if (destination.trim() === "") {
      e.preventDefault();
      console.log("Esta vacío");
    } else {
      navigate(
        `/reservaciones?orign=${orign}&destination=${destination}&departure_date=${departure_date}&passengers_numbers=${passengers_numbers}`,
        {
          replace: true,
        }
      );
    }
  };

  return (
    <div className="container">
      <div className="container__content">
        <div className="container__img">
          <img src="/assets/img/airport.png" alt="Airport" />
        </div>

        <div className="container__forms">
          <form onSubmit={handleSubmit} className="container__form">
            <h1 className="container__title">Busca ofertas de vuelos</h1>

            <label>
              Origen:
              <select
                className="container__input"
                name="orign"
                onChange={setState}
              >
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">Guadalajara</option>
                <option value="4">Cuatro</option>
              </select>
            </label>

            <label>
              Destino:
              <select
                className="container__input"
                name="destination"
                onChange={setState}
              >
                <option value="1">Uno</option>
                <option value="2">Dos</option>
                <option value="3">México</option>
                <option value="4">Cuatro</option>
              </select>
            </label>

            <label>
              Fecha:
              <select
                className="container__input"
                name="departure_date"
                onChange={setState}
              >
                {schedules.map((schedule, key) => {
                  return (
                    <option key={key} value={schedule.value}>
                      {schedule.text}
                    </option>
                  );
                })}
              </select>
            </label>

            <label>
              Pasajeros:
              <select
                className="container__input"
                name="passengers_numbers"
                onChange={setState}
              >
                <option value="1">Uno</option>
              </select>
            </label>

            <button href="#" className="">
              Buscar vuelos
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
