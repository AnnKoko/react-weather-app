import "./CurrentWeather.css";

export default function CurrentWeather({
  city,
  day,
  date,
  image,
  temp,
  desc,
  humidity,
  wind
}) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="city-name col-4">{city}</div>
        <div className="curr-date col-8">
          {day} {date}
        </div>
      </div>
      <div className="row rounded border border-2 border-light p-2 mb-3">
        <div className="curr-weather-icon col-6">
          <img src={image} width="100" alt="Weather" />
        </div>
        <div className="curr-weather-info col-6">
          <h3>
            <span id="curr-temp">{temp}</span>
            <a href="#" id="cels-degrees">
              °С
            </a>
            |
            <a href="#" id="fahrenh-degrees">
              °F
            </a>
          </h3>
          <p>
            {desc}
            <br />
            Humidity: {humidity}%
            <br />
            Wind: {wind} km/h
          </p>
        </div>
      </div>
    </div>
  );
}
