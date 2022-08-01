import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <CurrentWeather
          city="Toronto"
          day="Friday"
          date="10/07/2022"
          image="images/sunny.png"
          temp="19"
          desc="Sunny"
          humidity="55"
          wind="19"
        />
        <Forecast
          image="images/partly_cloudy.png"
          day="Saturday"
          temp_min="15"
          temp_max="21"
        />
        <Forecast
          image="images/rain_light.png"
          day="Sunday"
          temp_min="15"
          temp_max="21"
        />
        <Forecast
          image="images/rain_s_cloudy.png"
          day="Monday"
          temp_min="15"
          temp_max="21"
        />
        <Forecast
          image="images/sunny.png"
          day="Tuesday"
          temp_min="15"
          temp_max="21"
        />
        <Forecast
          image="images/partly_cloudy.png"
          day="Wednesday"
          temp_min="15"
          temp_max="21"
        />
      </div>
      <Footer/>
    </div>
  );
}
