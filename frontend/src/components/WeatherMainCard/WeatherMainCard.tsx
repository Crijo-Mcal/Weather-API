/* components */
import Location from "./Location";
import WeatherStats from "./WeatherStats";

/* utility */
import {temperatureConverter} from "../../utility/utility";

/* type */
import type {Day} from "../../types/WeatherData";

type Props = {
  selectedDayWeather: Day | null;
  resolvedLocationName: string | null;
  timezone: string | null;
  temperatureUnit: "C" | "F";
  setTemperatureUnit: React.Dispatch<React.SetStateAction<"C" | "F">>;
};

export default function WeatherMainCard({
  selectedDayWeather,
  resolvedLocationName,
  timezone,
  temperatureUnit,
  setTemperatureUnit,
}: Props) {
  const temp = selectedDayWeather?.temp ?? null;
  const condition = selectedDayWeather?.conditions ?? null;

  return (
    <section className="relative w-full md:w-106.75 h-74.75 flex flex-col justify-center   bg-bg md:rounded-default overflow-hidden m-2 ">
      {selectedDayWeather && (
        <>
          <Location
            selectedDayWeather={selectedDayWeather}
            timezone={timezone}
            resolvedLocationName={resolvedLocationName}
            temperatureUnit={temperatureUnit}
            setTemperatureUnit={setTemperatureUnit}
          />

          <div className="w-full h-50 mb-10  flex flex-col justify-center items-center overflow-hidden">
            <h1 className=" text-primary text-[102px] text- font-bold ">
              {temp && temperatureConverter(temp, temperatureUnit)}°
            </h1>
            <h2 className="text-[20px] text-primary font-medium">
              {condition}
            </h2>
          </div>

          <WeatherStats selectedDayWeather={selectedDayWeather} />
        </>
      )}
    </section>
  );
}
