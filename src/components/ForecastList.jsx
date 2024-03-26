import ForecastItem from "./ForecastItem";

export default function ForecastList({ forecastData }) {
  const filteredForecastData = forecastData.list.filter(
    (item, index) => index % 8 === 0
  );

  return (
    <ul className="w-full flex justify-center items-center gap-2">
      {filteredForecastData.map((forecastData, index) => (
        <ForecastItem key={index} forecastData={forecastData} />
      ))}
    </ul>
  );
}
