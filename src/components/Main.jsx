import useWeather from "../hooks/useWeather";
import useForecast from "../hooks/useForecast";
import WeatherSection from "./WeatherSection";
import ForecastList from "./ForecastList";

export default function Main({ city }) {
  if (!city) {
    return (
      <main className="max-w-screen-md p-4 flex flex-1 flex-col justify-center items-center gap-4">
        <span className="w-full p-4 flex justify-between items-center text-center text-xl border-white border-opacity-25 rounded-xl bg-white bg-opacity-25 shadow-[0_0_16px_0_rgba(255,255,255,0.25)] backdrop-blur">
          Enter city...
        </span>
      </main>
    );
  }

  const { weatherData, weatherLoading, weatherError } = useWeather({ city });
  const { forecastData, forecastLoading, forecastError } = useForecast({
    city,
  });

  return (
    <main className="max-w-screen-md p-4 flex flex-1 flex-col justify-center items-center gap-4">
      {weatherLoading && forecastLoading && (
        <span className="w-full p-4 flex justify-between items-center text-center text-xl border-white border-opacity-25 rounded-xl bg-white bg-opacity-25 shadow-[0_0_16px_0_rgba(255,255,255,0.25)] backdrop-blur">
          Loading...
        </span>
      )}
      {weatherError && forecastError && (
        <span className="w-full p-4 flex justify-between items-center text-center text-xl border-error border-opacity-75 rounded-xl bg-error bg-opacity-75 shadow-[0_0_16px_0_rgba(255,0,0,0.25)] backdrop-blur">
          Error
        </span>
      )}
      {!weatherLoading && !weatherError && (
        <WeatherSection weatherData={weatherData} />
      )}
      {!forecastLoading && !forecastError && (
        <ForecastList forecastData={forecastData} />
      )}
    </main>
  );
}
