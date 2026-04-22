export type WeatherIconCode =
    | "clear-day"
    | "clear-night"
    | "partly-cloudy-day"
    | "partly-cloudy-night"
    | "cloudy"
    | "rain"
    | "showers-day"
    | "showers-night"
    | "thunder-rain"
    | "thunder-showers-day"
    | "thunder-showers-night"
    | "snow"
    | "sleet"
    | "fog"
    | "wind";

const weatherIconMap: Record<WeatherIconCode | string, string> = {
    "clear-day": "clear-day.svg",
    "clear-night": "clear-night.svg",

    "partly-cloudy-day": "partly-cloudy-day.svg",
    "partly-cloudy-night": "partly-cloudy-night.svg",

    cloudy: "cloudy.svg",

    rain: "rain.svg",
    "showers-day": "rain.svg",
    "showers-night": "rain.svg",

    "thunder-rain": "thunder.svg",
    "thunder-showers-day": "thunder.svg",
    "thunder-showers-night": "thunder.svg",

    snow: "snow.svg",
    sleet: "snow.svg",

    fog: "fog.svg",
    wind: "wind.svg",
};

export default function getWeatherIcon(
    iconCode: WeatherIconCode | string
): string {
    const file = weatherIconMap[iconCode];

    return `/icons_svg/${file}`;
}