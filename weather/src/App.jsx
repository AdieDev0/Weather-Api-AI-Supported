import React, { useState } from 'react';
import axios from 'axios';


const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = '3a534fa9d85d40d5856200336241710';
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
    setWeather(response.data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
      <h1 className="text-4xl font-bold mb-4">Weather App</h1>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city"
        className="p-2 rounded border border-gray-300 mb-4"
      />
      <button onClick={fetchWeather} className="p-2 bg-blue-500 text-white rounded">Get Weather</button>
      {weather && (
        <div className="mt-4">
          <h2 className="text-2xl">{weather.location.name}</h2>
          <p className="text-xl">{weather.current.temp_c}°C</p>
          <p className="text-lg">{weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default App;
