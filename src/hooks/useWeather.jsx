import { useState, useEffect } from "react";
import axios from "axios";

export default function useWeather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);

  const apiKey = "ebac22e0a3d2dc0b9869d7b9bd94d79e";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setWeatherLoading(true);
        setWeatherError(null);
        const response = await axios.get(apiUrl, {
          params: {
            q: city,
            appid: apiKey,
            units: "metric",
          },
        });
        setWeatherData(response.data);
      } catch (error) {
        setWeatherError(error);
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, [city]);

  return { weatherData, weatherLoading, weatherError };
}
