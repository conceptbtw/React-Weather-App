import useWeather from "../hooks/useWeather";
import useForecast from "../hooks/useForecast";
import WeatherSection from "./WeatherSection";
import ForecastList from "./ForecastList";

export default function Main({ city }) {
  const { weatherData, weatherLoading, weatherError } = useWeather({ city });
  const { forecastData, forecastLoading, forecastError } = useForecast({
    city,
  });

  return (
    <main className="max-w-screen-md p-4 flex flex-1 flex-col justify-center items-center gap-2">
      {!weatherLoading && !weatherError && (
        <WeatherSection weatherData={weatherData} />
      )}
      {!forecastLoading && !forecastError && (
        <ForecastList forecastData={forecastData} />
      )}
    </main>
  );
}
