import axios from "axios";
import React, { useState } from "react";
import "../styles/Home.css";
import trailSearch from "../utils/API";
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Posts from "../pages/Posts"
import { Link } from 'react-router-dom';

export default function Home({ currentPage, handlePageChange }) {
  const [searchedTrails, setSearchedTrails] = useState([]);
  // create state for holding our search field data
  const [searchInputLat, setSearchInputLat] = useState("");
  const [searchInputLon, setSearchInputLon] = useState("");
//test
//second test
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInputLat) {
      return false;
    }

    try {
      const items = await trailSearch(searchInputLat, searchInputLon,)
      console.log(items);

      const trailData = items.splice(0, 5).map((trail) => ({
        id: trail.id,
        city: trail.city,
        name: trail.name,
        description: trail.description,
        difficulty: trail.difficulty,
        directions: trail.directions,
        image: trail.thumbnail || '',
      }));
      console.log(trailData);
      setSearchedTrails(trailData);
      setSearchInputLat('');
      setSearchInputLon('');


    } catch (err) {

      console.error(err);
    }

  };

  return (
    <div>
      <div className="home-container">
        <form onSubmit={handleFormSubmit} className="search">
          <input className="latitude" type="text" value={searchInputLat} placeholder="Enter Latitude" id="lat" name="lat"
            onChange={(e) => setSearchInputLat(e.target.value)}
          />
          <br></br>
          <input className="longitude" type="text" value={searchInputLon} placeholder="Enter Longitude" id="lon" name="lon"
            onChange={(e) => setSearchInputLon(e.target.value)}
          />

          <br></br>
          <button className="search-button" type="submit">Search</button>
          <br></br>
          
        </form>
      </div>

      <Container>
        <h2>
          {searchedTrails.length
            ? `Viewing ${searchedTrails.length} results:`
            : 'Search a trail to begin!'}
        </h2>
        <CardColumns>
          {searchedTrails.map((trails) => {
            return (
              <Card key={trails.trailId} border='dark'>
                <Card.Body>
                  <Card.Title>{trails.title}</Card.Title>
                  <p className='small'>Trail Name: {trails.name}</p>
                  <Card.Text>Trail Desciption: {trails.description}</Card.Text>
                  <a id="apibtn"href="#posts" onClick={() => handlePageChange('Posts')}
                    className={currentPage === 'Posts' ? 'link active' : 'link'}

                  >
                    View Trail
                  </a>

                </Card.Body>

              </Card>

            );

          })}
        </CardColumns>
      </Container>


    </div>
  );
}
