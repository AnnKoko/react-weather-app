import "./Forecast.css";

export default function Forecast({ image, day, temp_min, temp_max }) {
  return (
    <div class="row rounded border border-1 border-light p-1 mb-1 forecast">
      <div class="week-weather-icon col-4">
        <img src={image} width="50" />
      </div>
      <div class="week-weather-day col-4">
        <h4>{day}</h4>
      </div>
      <div class="week-weather-temp col-4">
        <h4>
          {temp_min}°C/{temp_max}°C
        </h4>
      </div>
    </div>
  );
}
