import { motion } from "framer-motion";
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
    <motion.section
      className="shadow-gradient2 bg-bg md:rounded-default relative flex h-90 w-full flex-col justify-between lg:h-74.75 lg:w-106.75 lg:shadow-lg"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 100, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {selectedDayWeather && (
        <>
          <Location
            selectedDayWeather={selectedDayWeather}
            timezone={timezone}
            resolvedLocationName={resolvedLocationName}
            temperatureUnit={temperatureUnit}
            setTemperatureUnit={setTemperatureUnit}
          />

          <div className="flex w-full flex-col items-center justify-center gap-1 overflow-hidden">
            <h1 className="text-primary text-[100px] leading-none font-bold">
              {temp && temperatureConverter(temp, temperatureUnit)}°
            </h1>
            <div className="text-primary flex w-full justify-center gap-2 font-mono text-[16px] font-light italic">
              <h1>
                {temperatureConverter(
                  selectedDayWeather.tempmax,
                  temperatureUnit,
                )}
                °
              </h1>
              <h1>|</h1>
              <h1>
                {temperatureConverter(
                  selectedDayWeather.tempmin,
                  temperatureUnit,
                )}
                °
              </h1>
            </div>
            <h2 className="text-primary text-[20px] font-medium">
              {condition}
            </h2>
          </div>

          <WeatherStats selectedDayWeather={selectedDayWeather} />
        </>
      )}
    </motion.section>
  );
}
