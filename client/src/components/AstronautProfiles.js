import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AstronautProfiles = () => {
  const [astronautData, setAstronautData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/astronauts?api_key=YOUR_API_KEY')
      .then(response => {
        setAstronautData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Astronaut Profiles</h1>
      <ul>
        {astronautData.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.biography}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AstronautProfiles;
