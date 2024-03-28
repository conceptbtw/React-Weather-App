export default function useIcon({ description }) {
  let icon;

  switch (description) {
    case "light thunderstorm":
    case "thunderstorm":
    case "heavy thunderstorm":
    case "ragged thunderstorm":
      icon =
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-extreme.svg";
      break;
    case "thunderstorm with light rain":
    case "thunderstorm with rain":
    case "thunderstorm with heavy rain":
    case "thunderstorm with light drizzle":
    case "thunderstorm with drizzle":
    case "thunderstorm with heavy drizzle":
      icon =
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-extreme-rain.svg";
      break;

    case "light intensity drizzle":
    case "drizzle":
    case "heavy intensity drizzle":
    case "light intensity drizzle rain":
    case "drizzle rain":
    case "heavy intensity drizzle rain":
    case "shower rain and drizzle":
    case "heavy shower rain and drizzle":
    case "shower drizzle":
      icon = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg";
      break;

    case "light rain":
    case "moderate rain":
    case "heavy intensity rain":
    case "very heavy rain":
    case "extreme rain":
    case "freezing rain":
    case "light intensity shower rain":
    case "shower rain":
    case "heavy intensity shower rain":
    case "ragged shower rain":
      icon = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg";
      break;

    case "mist":
      icon = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg";
      break;
    case "smoke":
      icon = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/smoke.svg";
      break;
    case "haze":
      icon = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/haze.svg";
      break;
    case "sand/dust whirls":
      icon = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sand.svg";
      break;
    case "fog":
      icon = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg";
      break;
    case "squalls":
      icon = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/windy.svg";
      break;
    case "tornado":
      icon = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/tornado.svg";
      break;

    case "clear sky":
    case "sky is clear":
      icon =
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg";
      break;

    case "few clouds":
    case "scattered clouds":
      icon = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg";
      break;
    case "broken clouds":
    case "overcast clouds":
      icon = "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg";
      break;

    default:
      icon =
        "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/not-available.svg";
  }

  return icon;
}
