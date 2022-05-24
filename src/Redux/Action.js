export const ADD_COUNTRY = "ADD_COUNTRY";
export const ADD_CITY = "ADD_CITY";

export const addCountry = (country) => {
  return {
    type: ADD_COUNTRY,
    payload: country,
  };
};
export const addCity = (cityinfo) => {
  return {
    type: ADD_CITY,
    payload: cityinfo,
  };
};
