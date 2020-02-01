import React from 'react';
export function City({cityData}) {

return(
<div className="weather-cont">
<div className='weather'>
<h2 className="name" key={cityData.sys.id}>{cityData.name}, {cityData.sys.country}</h2>
<h3 className="condition" >{cityData.weather[0].main}</h3>
<p className="condition" >{cityData.weather[0].description}</p>
<p className="para" >min-temp: {cityData.main.temp_min}</p>
<p className="para" >max-temp: {cityData.main.temp_max}</p>
<p className="para" >location: {cityData.coord.lon}, {cityData.coord.lat}</p>
</div>
</div>
)};
