import React, { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import fetchWeatherData from "../Service/fetchWeatherData"; // Correct relative path

const Inputs = () => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.currentTarget.value);
  };

  const handleSearchClick = async () => {
    if (city.trim() !== "") {
      const data = await fetchWeatherData(city); // fetch weather data
      console.log("Weather data from Inputs:", data); // Optional: do something with it
      setCity(""); // Clear input
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="flex flex-row justify-center my-6 items-center">
      <div className="w-3/4 items-center justify-center space-x-4 flex flex-row">
        <input
          value={city}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          type="text"
          placeholder="Search Your City..."
          className="bg-white rounded-2xl p-3 text-gray-500 font-light w-full capitalize focus:outline-none text-xl"
        />

        <BiSearch
          size={30}
          className="text-white cursor-pointer transition ease-in hover:scale-125"
          onClick={handleSearchClick}
        />

        <BiCurrentLocation
          size={30}
          className="text-white cursor-pointer transition ease-in hover:scale-125"
          onClick={() => alert("Add location-based fetch later")}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center space-x-2">
        <button className="text-2xl text-white hover:scale-125 transition ease-in">
          °C
        </button>
        <p className="text-white">|</p>
        <button className="text-2xl text-white hover:scale-125 transition ease-in">
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
