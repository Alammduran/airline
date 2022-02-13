import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../service/api";
import moment from "moment";
import "moment/locale/es";
import { useNavigate } from "react-router-dom";
import { getCities } from "../../redux/actions/citiesActions";

// Redux
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.cities.cities);

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

    const a = () => dispatch(getCities());
    a();
  }, []);

  useEffect(() => {
    console.log(cities);
  }, [cities]);

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
        `/vuelos?orign=${orign}&destination=${destination}&departure_date=${departure_date}&passengers_numbers=${passengers_numbers}`,
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
          <img src="/assets/img/airport.svg" alt="Airport" />
        </div>

        <div className="container__forms">
          <form onSubmit={handleSubmit} className="container__form">
            <h1 className="container__title">Busca ofertas de vuelos</h1>

            <div className="container__box">
              <label>
                Origen:
                <select
                  className="container__input"
                  name="orign"
                  onChange={setState}
                >
                  {cities.originCities.map((originCity, key) => {
                    return (
                      <option key={key} value={originCity.origin}>
                        {originCity.origin}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            <div className="container__box">
              <label>
                Destino:
                <select
                  className="container__input"
                  name="destination"
                  onChange={setState}
                >
                  {cities.originCities.map((destinationCity, key) => {
                    return (
                      <option key={key} value={destinationCity.origin}>
                        {destinationCity.origin}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>

            <div className="container__box">
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
            </div>

            <div className="container__box">
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
            </div>

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
