import { useState, useEffect } from "react";
import useIcon from "../hooks/useIcon";

export default function WeatherSection({ weatherData }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const city = weatherData.name;
  const country = weatherData.sys.country.toLowerCase();
  const description = weatherData.weather[0].description.toLowerCase();
  const temperature = weatherData.main.temp.toFixed();
  const humidity = weatherData.main.humidity;
  const wind = weatherData.wind.speed.toFixed();

  const icon = useIcon({ description });
  const flag = `fi fi-${country} rounded`;

  return (
    <section className="w-full p-4 flex flex-col justify-between items-center border border-white border-opacity-25 rounded-xl bg-white bg-opacity-25 shadow-[0_0_16px_0_rgba(255,255,255,0.25)] backdrop-blur">
      <span className="">Today, {currentDateTime.toLocaleString()}</span>
      <div className="w-full flex justify-between items-center">
        <div className="min-w-20 max-w-32 w-full flex justify-start items-center">
          <img className="w-full" src={icon} alt=""></img>
        </div>
        <div className="w-full flex justify-center items-center gap-2 text-xl font-bold sm:text-2xl md:text-3xl">
          <span className={flag}></span>
          <span className="">{city}</span>
        </div>
        <ul className="min-w-20 max-w-32 w-full flex flex-col justify-center items-center">
          <li className="w-full flex justify-between items-center border-b border-white border-opacity-25">
            <img
              className="w-8"
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer.svg"
              alt="Thermometer"
            ></img>
            <span className="">{temperature} °C</span>
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
      </div>
    </section>
  );
}
