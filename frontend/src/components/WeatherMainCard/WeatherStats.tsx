import huminity from "../../assets/img/humidity.png";
import wind from "../../assets/img/wind.png";

import type { Day } from "../../types/WeatherData";

type Props = {
  selectedDayWeather: Day | null;
};

export default function WeatherStats({ selectedDayWeather }: Props) {
  return (
    <div className="flex h-20 w-full justify-center gap-10">
      <div className="flex items-center justify-center gap-2">
        <img className="ml-2 w-6.25" src={huminity} alt="huminity" />
        <h3 className="text-primary">{selectedDayWeather?.humidity}%</h3>
      </div>
      <div className="flex items-center justify-center gap-2">
        <img className="ml-2 w-6.25" src={wind} alt="wind" />
        <h3 className="text-primary">{selectedDayWeather?.windspeed} km/h</h3>
      </div>
    </div>
  );
}
