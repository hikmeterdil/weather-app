import React from "react";
import { useState } from "react";
import { Search } from "./Search";
import { City } from "./City";

export function Weather() {
  const [inputValue, setInputValue] = useState("");
  const [cityData, setCityData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = async inputValue => {
    try {
      setIsLoading(true);
      const QUERY_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&q=${inputValue}`;
      const res = await fetch(QUERY_URL);
      const data = await res.json();
      setCityData(data);
      setIsLoading(false);
    } catch (err) {
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
  return (
    <>
      <Search
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {isLoading && <p>Loading...</p>}
      {cityData.name && <City cityData={cityData} />}
      {hasError && <p>Error...</p>}
    </>
  );
}
