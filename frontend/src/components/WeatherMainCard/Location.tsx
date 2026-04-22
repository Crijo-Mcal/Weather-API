import type { Day } from "../../types/WeatherData";

/* utility */
import { dateToString, isLatLng } from "../../utility/utility";
import getWeatherIcon from "../../utility/getWeatherIcon";

type Props = {
  selectedDayWeather: Day | null;
  resolvedLocationName: string | null;
  timezone: string | null;
  temperatureUnit: "C" | "F";
  setTemperatureUnit: React.Dispatch<React.SetStateAction<"C" | "F">>;
};

export default function location({
  selectedDayWeather,
  timezone,
  resolvedLocationName,
  temperatureUnit,
  setTemperatureUnit,
}: Props) {
  return (
    <div className="text-primary flex h-20 w-full items-center justify-between px-6">
      <div className="flex h-auto w-auto gap-3">
        {selectedDayWeather && selectedDayWeather.icon && (
          <img
            src={getWeatherIcon(selectedDayWeather.icon)}
            className="h-16 w-15"
            alt={selectedDayWeather.icon}
          />
        )}

        <div className="flex h-15 flex-col justify-center font-medium">
          {resolvedLocationName && (
            <h1 className="w-screen max-w-55 truncate text-[20px] text-shadow-2xs">
              {isLatLng(resolvedLocationName) && "Your Location"}
              {!isLatLng(resolvedLocationName) &&
                resolvedLocationName.split(",")[0]}
            </h1>
          )}

          <h1>
            <span className="text-[16px]">
              {selectedDayWeather?.datetime &&
                dateToString(selectedDayWeather?.datetime)}
            </span>
            {"    "}
            <span className="text-[13px] font-light italic">({timezone})</span>
          </h1>
        </div>
      </div>

      <h1 className="text-[25px] font-light">
        <span
          className={`cursor-pointer ${temperatureUnit === "C" ? "text-[35px] opacity-100" : "text-[25px] opacity-50"}`}
          onClick={() => setTemperatureUnit("C")}
        >
          C
        </span>
        /
        <samp
          className={`cursor-pointer ${temperatureUnit === "F" ? "text-[35px] opacity-100" : "text-[25px] opacity-50"}`}
          onClick={() => setTemperatureUnit("F")}
        >
          F
        </samp>
      </h1>
    </div>
  );
}
