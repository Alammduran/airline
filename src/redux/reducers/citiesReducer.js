import { GET_CITIES } from "../types";

// cada reducer tiene su propio state
const initialState = {
  cities: {
    originCities: [{}],
    destinyCities: [{}],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        cities: payload,
      };
    default:
      return state;
  }
}
