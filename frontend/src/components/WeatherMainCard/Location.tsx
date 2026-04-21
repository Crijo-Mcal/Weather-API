import img from "../../assets/img/default.png";

import type { Day } from "../../types/WeatherData";

import { dateToString } from "../../utility/utility";

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
    <div className="text-primary absolute top-3 flex h-18.75 w-full items-center justify-between px-6">
      <div className="flex h-full w-auto gap-3">
        <img className="h-16.25 w-16.25" src={img} alt="default" />
        <div className="font-medium">
          <h1 className="w-screen max-w-55 truncate text-[20px] text-shadow-2xs">
            {resolvedLocationName}
          </h1>
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
      <div className="text-primary h-full font-mono text-[16px]">
        <h1 className="mt-3 text-2xl">
          <span
            className={`cursor-pointer ${temperatureUnit === "C" ? "opacity-100" : "opacity-50"}`}
            onClick={() => setTemperatureUnit("C")}
          >
            C
          </span>
          /
          <samp
            className={`cursor-pointer ${temperatureUnit === "F" ? "opacity-100" : "opacity-50"}`}
            onClick={() => setTemperatureUnit("F")}
          >
            F
          </samp>
        </h1>
      </div>
    </div>
  );
}
