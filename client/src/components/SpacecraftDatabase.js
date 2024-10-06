import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpacecraftDatabase = () => {
  const [spacecraftData, setSpacecraftData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/spacecraft?api_key=YOUR_API_KEY')
      .then(response => {
        setSpacecraftData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Spacecraft Database</h1>
      <ul>
        {spacecraftData.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpacecraftDatabase;
