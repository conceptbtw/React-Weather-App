import ForecastItem from "./ForecastItem";

export default function ForecastList({ forecastData }) {
  const filteredForecastData = forecastData.list.filter(
    (item, index) => index % 8 === 0
  );

  return (
    <ul className="w-full flex flex-wrap justify-center items-center gap-4 sm:grid-cols-4 md:grid-cols-5">
      {filteredForecastData.map((forecastData, index) => (
        <ForecastItem key={index} forecastData={forecastData} />
      ))}
    </ul>
  );
}
