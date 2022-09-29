import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../service/api";
import moment from "moment";
import "moment/locale/es";
import { useNavigate } from "react-router-dom";
import { getCities } from "../../redux/actions/citiesActions";
import Select from "../../components/select";
// Redux
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const cities = useSelector((state) => state.cities.cities);

  const [disable, setDisable] = useState(true);
  const [schedules, setSchedules] = useState([
    {
      value: "",
      text: "",
    },
  ]);
  const [filters, setFilters] = useState({
    origin: "",
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
    dispatch(getCities());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { destination } = filters;

    if (destination.trim() === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [filters]);

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };
  const [test, setTest] = useState([]);

  useEffect(() => {
    console.log(test);
  }, [test]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const { origin, destination, departure_date, passengers_numbers } = filters;
    // if (destination.trim() === "") {
    //   e.preventDefault();
    //   console.log("Esta vacío");
    // } else {
    //   navigate(
    //     `/vuelos?origin=${origin}&destination=${destination}&departure_date=${departure_date}&passengers_numbers=${passengers_numbers}`,
    //     {
    //       replace: true,
    //     }
    //   );
    // }
    let newValue = {
      test: "test",
      id: "1",
    };
    setTest([...test, newValue]);
  };

  return (
    <>
      <div className="empty-space"></div>
      <div className="simple-container-grid">
        <div className="justify-center">
          <img src="/assets/img/airport.svg" alt="Airport" />
        </div>

        <div className="forms justify-center">
          <form onSubmit={handleSubmit} className="form">
            <h1 className="title">Busca ofertas de vuelos</h1>

            <Select
              name="origin"
              label="Origen:"
              options={cities.originCities}
              handleChange={handleInputChange}
            />
            <Select
              name="destination"
              label="Destino:"
              options={cities.destinyCities}
              handleChange={handleInputChange}
            />

            <div className="input-box" key="dsa">
              <label>
                Fecha:
                <select
                  className="simple-input"
                  name="departure_date"
                  onChange={handleInputChange}
                >
                  <option value="">Selecciona una opción</option>
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

            <Select
              name="passengers_numbers"
              label="Pasajeros:"
              options={numbers}
              handleChange={handleInputChange}
              isArrayWithoutKeys={true}
            />

            {!disable ? (
              <button className="disable-button" disabled>
                Buscar vuelos
              </button>
            ) : (
              <button type="submit" className="nomal-button">
                Buscar vuelos
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
