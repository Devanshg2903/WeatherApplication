import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    //console.log("currentWeatherFetch")
    //console.log(currentWeatherFetch) // this is promise
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    //console.log("forecastFetch")
   // console.log(forecastFetch)// this is promise

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
       // console.log(response)
      //  console.log("now json data comes")
        const weatherResponse = await response[0].json();
       // console.log(weatherResponse) this gives data
        const forcastResponse = await response[1].json();
        //console.log(forcastResponse) this gives data

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
        // console.log(searchData.label) // gives name of city
        
      })
      .catch(console.log);
      // console.log(currentWeather)
      //   console.log(forecast)
  };

  return (

    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
   
  );
}

export default App;
