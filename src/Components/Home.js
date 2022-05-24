import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.css";

function Home() {
  const [cities, setcities] = useState([]);
  const citylist = useSelector((state) => state.city);
  const countrieslist = useSelector((state) => state.countries);

  useEffect(() => {
    setcities([...citylist]);
  }, []);
  return (
    <div>
      <select
        onChange={(e) => {
          const citieslist = citylist.filter((el) => {
            return el.country == e.target.value;
          });
          setcities(citieslist);
        }}
      >
        <option>filter by country</option>
        {countrieslist.map((el) => {
          return <option value={el.name}>{el.name}</option>;
        })}
      </select>
      <select
        onChange={(e) => {
          if (e.target.value === "ascending") {
            citylist.sort(function (a, b) {
              return Number(a.population) - Number(b.population);
            });
            setcities(citylist);
          } else if (e.target.value == "descending") {
            citylist.sort(function (a, b) {
              return Number(b.population) - Number(a.population);
            });
            setcities(citylist);
          }
        }}
      >
        <option>sort by population</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">City</th>
            <th scope="col">population</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((el) => {
            return (
              <tr>
                <th scope="row">{el.id}</th>
                <td>{el.country}</td>
                <td>{el.city}</td>
                <td>{el.population}</td>
                <td>Delete</td>
                <td>Edit</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
