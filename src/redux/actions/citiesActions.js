import axios from "axios";
import { API_URL } from "../../service/api";
import { GET_CITIES } from "../types";

export function getCities() {
  return (dispatch) => {
    axios
      .get(API_URL + "api/get-cities")
      .then((res) => {
        dispatch(cities(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

const cities = (cities) => ({
  type: GET_CITIES,
  payload: cities,
});
