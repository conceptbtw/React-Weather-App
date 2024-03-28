import ForecastItem from "./ForecastItem";

export default function ForecastList({ forecastData }) {
  return (
    <ul className="w-full flex flex-wrap justify-center items-center gap-4">
      {forecastData &&
        forecastData.list.map((item, index) => (
          <ForecastItem key={index} forecastData={item} />
        ))}
    </ul>
  );
}
