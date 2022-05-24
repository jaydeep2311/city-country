import { ADD_COUNTRY, addCountry, ADD_CITY } from "./Action";

const initialstate = {
  countries: [],
  city: [],
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return {
        ...state,
        countries: [...action.payload],
      };
    case ADD_CITY:
      return {
        ...state,
        city: [...action.payload],
      };

    default:
      return state;
  }
};
