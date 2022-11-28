import axios from "axios";
import React, { useState } from "react";
import "../styles/Home.css";
import trailSearch from "../utils/API";

export default function Home() {
  const [searchedTrails, setSearchedTrails] = useState([]);
  // create state for holding our search field data
  const [searchInputLat, setSearchInputLat] = useState("");
  const [searchInputLon, setSearchInputLon] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInputLat) {
      return false;
    }

    try {
      const items = await trailSearch(searchInputLat, searchInputLon);

      console.log(items);

      const trailData = items.splice(0, 5).map((trail) => ({
        id: trail.id,
        city: trail.city,
        name: trail.name,
        description: trail.description,
        image: trail.thumbnail || "",
      }));
      console.log(trailData);
      setSearchedTrails(trailData);
      setSearchInputLat("");
      setSearchInputLon("");
    } catch (err) {
      console.error(err);
    }
  };

  // const [formState, setFormState] = useState({
  //   lat: '',
  //   lon: '',
  // });

  // const handleTrailSearch = async (event) => {
  //   event.preventDefault();
  //   try {
  //     trailSearch(formState.lat, formState.lon);
  //     // SLC lat 40.76 lon -111.89
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  return (
    <div>
      <div className="home-container">
        <form onSubmit={handleFormSubmit} className="search">
          <input
            className="latitude"
            type="text"
            value={searchInputLat}
            placeholder="Enter Latitude"
            id="lat"
            name="lat"
            onChange={(e) => setSearchInputLat(e.target.value)}
          />
          <input
            className="longitude"
            type="text"
            value={searchInputLon}
            placeholder="Enter Longitude"
            id="lon"
            name="lon"
            onChange={(e) => setSearchInputLon(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
          <p>name{searchedTrails[0].name}</p>
      </div>
    </div>
  );
}
