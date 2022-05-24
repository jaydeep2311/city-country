import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountry } from "../Redux/Action";

function Addcountries() {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    const payload = {
      name: country,
    };
    const response = await fetch("http://localhost:3001/countries", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    AddCountries();
  }

  const AddCountries = async () => {
    const response = await fetch("http://localhost:3001/countries");
    const data = await response.json();
    dispatch(addCountry([...data]));
  };
  useEffect(() => {
    AddCountries();
    console.log("useeffect");
  }, []);
  return (
    <div>
      <h1>Add Countries</h1>
      <input
        type="text"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          console.log(country);
        }}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Add
      </button>
    </div>
  );
}

export default Addcountries;
