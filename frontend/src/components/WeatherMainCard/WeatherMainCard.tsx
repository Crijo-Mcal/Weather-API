/* components */
import Location from "./Location";
import WeatherStats from "./WeatherStats";

/* utility */
import { temperatureConverter } from "../../utility/utility";

/* type */
import type { Day } from "../../types/WeatherData";

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
    <section className="shadow-gradient2 bg-bg md:rounded-default relative flex w-full flex-col justify-center lg:h-74.75 lg:w-106.75 lg:shadow-lg">
      {selectedDayWeather && (
        <>
          <Location
            selectedDayWeather={selectedDayWeather}
            timezone={timezone}
            resolvedLocationName={resolvedLocationName}
            temperatureUnit={temperatureUnit}
            setTemperatureUnit={setTemperatureUnit}
          />

          <div className="mt-5 mb-10 flex h-50 w-full flex-col items-center justify-center overflow-hidden">
            <h1 className="text-primary text-[90px] font-bold">
              {temp && temperatureConverter(temp, temperatureUnit)}°
            </h1>
            <h2 className="text-primary text-[20px] font-medium">
              {condition}
            </h2>
          </div>

          <WeatherStats selectedDayWeather={selectedDayWeather} />
        </>
      )}
    </section>
  );
}
