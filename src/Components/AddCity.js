import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../Redux/Action";
import "./AddCity.css";

function AddCity() {
  const dispatch = useDispatch();

  const [countries, setcountries] = useState([]);
  const [info, setinfo] = useState({
    city: "",
    country: "",
    population: "",
  });
  async function handleSubmit(e) {
    const payload = info;
    const response = await fetch("http://localhost:3001/city", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    AddCities();
  }
  const AddCountries = async () => {
    const response = await fetch("http://localhost:3001/countries");
    const data = await response.json();
    setcountries([...data]);
  };
  const handleCountry = (e) => {
    setinfo({ ...info, country: e.target.value });
  };
  const AddCities = async () => {
    const response = await fetch("http://localhost:3001/city");
    const data = await response.json();
    dispatch(addCity([...data]));
  };
  useEffect(() => {
    AddCountries();
    AddCities();
  }, []);
  return (
    <div>
      <h1>Add City</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Add city name"
          value={info.city}
          onChange={(e) => setinfo({ ...info, city: e.target.value })}
        />
        <select
          name="country"
          id="count"
          onChange={(e) => {
            handleCountry(e);
          }}
        >
          {countries.map((el) => {
            return <option value={el.name}>{el.name}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Add the number"
          value={info.population}
          onChange={(e) => setinfo({ ...info, population: e.target.value })}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit{" "}
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default AddCity;
