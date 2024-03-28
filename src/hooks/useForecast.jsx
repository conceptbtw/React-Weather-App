import { useState, useEffect } from "react";
import axios from "axios";

export default function useForecast({ city }) {
  const [forecastData, setForecastData] = useState(null);
  const [forecastError, setForecastError] = useState(null);
  const [forecastLoading, setForecastLoading] = useState(true);

  const apiKey = "bd5e378503939ddaee76f12ad7a97608";
  const apiUrl = "https://api.openweathermap.org/data/2.5/forecast/daily";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setForecastLoading(true);
        setForecastError(null);
        const response = await axios.get(apiUrl, {
          params: {
            q: city,
            cnt: 7,
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
