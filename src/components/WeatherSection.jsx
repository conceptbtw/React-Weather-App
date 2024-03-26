import useIcon from "../hooks/useIcon";

export default function WeatherSection({ weatherData }) {
  const city = weatherData.name;
  const description = weatherData.weather[0].description.toLowerCase();
  const temperature = weatherData.main.temp.toFixed();
  const humidity = weatherData.main.humidity;
  const wind = weatherData.wind.speed.toFixed();

  const icon = useIcon({ description });

  return (
    <section className="w-full p-2 flex justify-between items-center border rounded-xl">
      <div className="flex flex-col justify-center items-center">
        <img className="w-32" src={icon} alt=""></img>
      </div>
      <span className="text-3xl font-bold">{city}</span>
      <ul className="w-32 flex flex-col justify-center items-center">
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
    </section>
  );
}
