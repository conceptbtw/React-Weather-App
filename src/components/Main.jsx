import ForecastList from "./ForecastList";
import WeatherSection from "./WeatherSection";

export default function Main() {
  return (
    <main className="max-w-screen-md p-4 flex flex-1 flex-col justify-center items-center gap-2">
      <WeatherSection />
      <ForecastList />
    </main>
  );
}
