import axios from 'axios';
import React, { useState } from 'react';
import "../styles/Home.css";
import trailSearch from "../utils/API";
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Posts from "../pages/Posts"

export default function Home() {
  const [searchedTrails, setSearchedTrails] = useState([]);
  // create state for holding our search field data
  const [searchInputLat, setSearchInputLat] = useState('');
  const [searchInputLon, setSearchInputLon] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInputLat) {
      return false;
    }

    try {
      const items = await trailSearch(searchInputLat,searchInputLon,)
      
     
       
      

      
      console.log(items);

      const trailData = items.splice(0,5).map((trail) => ({
        id: trail.id,
        city: trail.city,
        name: trail.name,
        description: trail.description,
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
        <form onSubmit={handleFormSubmit}className="search">
          <input className="latitude" type="text" value={searchInputLat} placeholder="Enter Latitude" id="lat" name="lat" 
            onChange={(e) => setSearchInputLat(e.target.value)}
            />
          <input className="longitude" type="text"value={searchInputLon} placeholder="Enter Longitude" id="lon" name="lon"
             onChange={(e) => setSearchInputLon(e.target.value)}
            />
          <button  type="submit">Search</button>
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
                  <Button color="primary"className="apibtn"onClick={<Posts />}>View Trail</Button>

                </Card.Body>
                
              </Card>
              
            );
            
          })}
        </CardColumns>
      </Container>
      
     
    </div>
  );
}
