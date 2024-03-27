import { useState, useEffect } from "react";
import axios from "axios";

export default function useForecast({ city }) {
  const [forecastData, setForecastData] = useState(null);
  const [forecastError, setForecastError] = useState(null);
  const [forecastLoading, setForecastLoading] = useState(true);

  const apiKey = "ebac22e0a3d2dc0b9869d7b9bd94d79e";
  const apiUrl = "https://api.openweathermap.org/data/2.5/forecast";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setForecastLoading(true);
        setForecastError(null);
        const response = await axios.get(apiUrl, {
          params: {
            q: city,
            appid: apiKey,
            units: "metric",
          },
        });
        setForecastData(response.data);
      } catch (error) {
        setForecastError(error);
      } finally {
        setForecastLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, [city]);

  return { forecastData, forecastLoading, forecastError };
}
