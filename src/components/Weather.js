import React from 'react';
import data from './city-weather.json';
export function Weather() {

return(
    <div className="weather-cont">
{data.map(item =>
<div className='weather'>
<h2 className="name" key={item.sys.id}>{item.name}, {item.sys.country}</h2>
<h3 className="condition" key={item.sys.id}>{item.weather[0].main}</h3>
<p className="condition" key={item.sys.id}>{item.weather[0].description}</p>
<p className="para" key={item.sys.id}>min-temp: {item.main.temp_min}</p>
<p className="para" key={item.sys.id}>max-temp: {item.main.temp_max}</p>
<p className="para" key={item.sys.id}>location: {item.coord.lon}, {item.coord.lat}</p>
</div>
)}
</div>
)};
