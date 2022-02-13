import { GET_CITIES } from "../types";

// cada reducer tiene su propio state
const initialState = {
  cities: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
}
