import ForecastItem from "./ForecastItem";

export default function ForecastList() {
  return (
    <ul className="flex justify-center items-center gap-2">
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </ul>
  );
}
