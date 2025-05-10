const fetchWeatherData = async (city) => {
  API_KEY = "9365ea75838d5c1f6f6909aebe1f7d56";
  BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    console.log(data); // You can return or use this object
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    return null;
  }
};
fetchWeatherData("Mumbai");


export default fetchWeatherData;
