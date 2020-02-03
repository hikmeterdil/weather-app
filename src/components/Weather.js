import React from "react";
import { useState } from "react";
import { Search } from "./Search";
import { City } from "./City";

let idCounter = 0

function uniqueId() {
    return idCounter++
}


export function Weather() {
  const [inputValue, setInputValue] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const fetchData = async inputValue => {
    try {
      setIsLoading(true);
      const QUERY_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&q=${inputValue}`;
      const res = await fetch(QUERY_URL);
      if (!res.ok) {
        throw new Error("City not found!");
      }
      const data = await res.json();
      setSearchHistory(currentSearchHistory => [
        Object.assign(data, {id: uniqueId()}),
        ...currentSearchHistory
      ]);
      setIsLoading(false);
      setHasError(false);
      setErrorMessage(null);
    } catch (err) {
      setErrorMessage(`Error! ${inputValue} not found`);
      setHasError(true);
      setIsLoading(false);
    }
  };
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetchData(inputValue);
  }
  function handleDeleteCity(cityId) {
      setSearchHistory(history => history.filter(city => (city.id !== cityId)))
  }
  return (
    <>
      <Search
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {isLoading && <p>Loading...</p>}
      {hasError && <p>{errorMessage}</p>}
      {searchHistory.map(cityData => (
          <City key={cityData.id} 
                cityData={cityData}
                handleDelete={handleDeleteCity.bind(cityData.id)}/>)
      )}
    </>
  );
}
