import React, { useState } from 'react';
import "../styles/Home.css";
import trailSearch from "../utils/API";


export default function Home() {
    const [formState, setFormState] = useState({
     lat:'',
     lon:'',
      });
      
  

    
    const handleTrailSearch = async (event) => {
      
      
    
        try {
          const { trailSearch } = await trailSearch({
            variables: { ...formState },
            
          });
          console.log(trailSearch);
    
        
        } catch (e) {
          console.error(e);
        }
      };

    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
    
  return (
    <div>
      <div className="home-container">
        <form className="search">
          <input className="latitude" type="text" placeholder="Enter Latitude" value={formState.lat}name="q"
           onChange={handleChange}/>
          <input className="longitude"type="text" placeholder="Enter Longitude"value={formState.lon} name="q"
           onChange={handleChange}/>
          <button onClick={handleTrailSearch} type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
