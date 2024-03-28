import useIcon from "../hooks/useIcon";

export default function ForecastItem({ forecastData }) {
  const day = new Date(forecastData.dt * 1000).toLocaleDateString("en-US", {
    weekday: "long",
  });
  const description = forecastData.weather[0].description.toLowerCase();
  const maxTemperature = forecastData.temp.max.toFixed();
  const minTemperature = forecastData.temp.min.toFixed();
  const humidity = forecastData.humidity.toFixed();
  const wind = forecastData.speed.toFixed();

  const icon = useIcon({ description });

  return (
    <li className="min-w-32 p-4 flex flex-1 flex-col justify-center items-center border border-white border-opacity-25 rounded-xl bg-white bg-opacity-25 shadow-[0_0_16px_0_rgba(255,255,255,0.25)] backdrop-blur">
      <span className="w-full flex justify-center items-center">{day}</span>
      <img className="max-w-32 w-full" src={icon} alt=""></img>
      <ul className="w-full flex flex-col justify-center items-center">
        <li className="w-full flex justify-between items-center border-b border-white border-opacity-25">
          <img
            className="w-8"
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer.svg"
            alt="Thermometer"
          ></img>
          <div className="flex">
            <span className="">{maxTemperature}°/</span>
            <span className="opacity-75">{minTemperature}°</span>
          </div>
        </li>
        <li className="w-full flex justify-between items-center border-b border-white border-opacity-25">
          <img
            className="w-8"
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg"
            alt="Humidity"
          ></img>
          <span className="">{humidity} %</span>
        </li>
        <li className="w-full flex justify-between items-center border-b border-white border-opacity-25">
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
