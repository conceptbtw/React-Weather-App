import useIcon from "../hooks/useIcon";

export default function ForecastItem({ forecastData }) {
  const date = new Date(forecastData.dt * 1000);
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const description = forecastData.weather[0].description.toLowerCase();
  const temperature = forecastData.main.temp.toFixed();
  const humidity = forecastData.main.humidity;
  const wind = forecastData.wind.speed.toFixed();

  const icon = useIcon({ description });

  return (
    <li className="w-full p-2 flex flex-col justify-center items-center border rounded-xl">
      <span className="w-full flex justify-center items-center">{day}</span>
      <img className="w-full" src={icon} alt=""></img>
      <ul className="w-full flex flex-col justify-center items-center">
        <li className="w-full flex justify-between items-center">
          <img
            className="w-8"
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer.svg"
            alt="Thermometer"
          ></img>
          <span className="">{temperature} °C</span>
        </li>
        <li className="w-full flex justify-between items-center">
          <img
            className="w-8"
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg"
            alt="Humidity"
          ></img>
          <span className="">{humidity} %</span>
        </li>
        <li className="w-full flex justify-between items-center">
          <img
            className="w-8"
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"
            alt="Wind"
          ></img>
          <span className="">{wind} m/s</span>
        </li>
      </ul>
    </li>
  );
}
