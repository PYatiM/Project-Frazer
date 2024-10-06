import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY')
      .then(response => {
        setTimelineData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Timeline of Deep Space Exploration</h1>
      <ul>
        {timelineData.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p>{item.explanation}</p>
            <img src={item.url} alt={item.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
