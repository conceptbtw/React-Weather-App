import { useState, useEffect } from "react";
import useIcon from "../hooks/useIcon";
import DataList from "./DataList";

export default function WeatherSection({ weatherData }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const {
    name: city,
    sys: { country },
    weather: [{ description }],
    main: { temp: temperature, humidity },
    wind: { speed: wind },
  } = weatherData;

  const icon = useIcon({ description });
  const flag = `fi fi-${country.toLowerCase()} rounded`;

  const items = [
    {
      src: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer.svg",
      primary: `${temperature.toFixed()}°`,
    },
    {
      src: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg",
      primary: `${humidity} %`,
    },
    {
      src: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg",
      primary: `${wind.toFixed()} m/s`,
    },
  ];

  return (
    <section className="w-full p-4 flex flex-col justify-center items-center border border-white border-opacity-25 rounded-xl bg-white bg-opacity-25 shadow-[0_0_16px_0_rgba(255,255,255,0.25)] backdrop-blur">
      <span className="text-center">
        Today, {currentDateTime.toLocaleString()}
      </span>
      <div className="w-full grid grid-cols-1 justify-center items-center sm:grid-cols-5">
        <div className="w-full flex justify-center items-center">
          <img className="max-w-32 w-full" src={icon} alt="Weather"></img>
        </div>
        <div className="w-full flex justify-center items-center gap-2 text-3xl font-bold sm:col-span-3">
          <span className={flag}></span>
          <span className="">{city}</span>
        </div>
        <DataList items={items} />
      </div>
    </section>
  );
}
