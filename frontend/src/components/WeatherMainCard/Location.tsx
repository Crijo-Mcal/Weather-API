import img from "../../assets/img/default.png";

import type {Day} from "../../types/WeatherData";

import {dateToString} from "../../utility/utility";

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
    <div className="absolute top-2 px-6 w-full h-18.75  flex items-center justify-between  text-primary">
      <div className="w-auto h-full flex  gap-3">
        <img className="w-16.25 h-16.25" src={img} alt="default" />
        <div className="font-medium">
          <h1 className=" text-[20px]">{resolvedLocationName}</h1>
          <h1 className=" text-[16px] ">
            <span className="text-[20px]">
              {selectedDayWeather?.datetime &&
                dateToString(selectedDayWeather?.datetime)}
            </span>
            {"    "}
            <span className="text-[13px] italic font-light">({timezone})</span>
          </h1>
        </div>
      </div>
      <div className="h-full text-[16px] font-mono text-primary">
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
