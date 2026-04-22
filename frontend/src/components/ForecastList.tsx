import { motion } from "framer-motion";
import { temperatureConverter, dateToString } from "../utility/utility";
import getWeatherIcon from "../utility/getWeatherIcon";

/* type */
import type { ResponseData } from "../types/WeatherData";

type params = {
  weatherData: ResponseData | null;
  temperatureUnit: "C" | "F";
  selectedDayIndex: number;
  setSelectedDayIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function ForecastList({
  weatherData,
  temperatureUnit,
  selectedDayIndex,
  setSelectedDayIndex,
}: params) {
  const days = weatherData?.data?.days ?? [];

  return (
    <motion.section
      className="bg-bg lg:rounded-default text-primary shadow-gradient2 relative flex h-full min-h-74.75 w-full flex-wrap items-center justify-center gap-2.5 overflow-hidden p-6 text-[16px] lg:w-106.75 lg:p-4 lg:shadow-lg"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 100, x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {days &&
        days.map((day, y) => (
          <div
            className={`bg-bg rounded-default flex h-30 w-22.5 transform cursor-pointer flex-col items-center justify-center gap-1 transition-all duration-300 ease-in-out ${selectedDayIndex === y ? "shadow-gradient2 scale-106 shadow-lg" : "shadow-gradient1 scale-100 shadow-md"}`}
            key={y}
            onClick={() => setSelectedDayIndex(y)}
          >
            <img
              className="h-9 w-9"
              src={getWeatherIcon(day.icon)}
              alt={day.icon}
            />
            <p className="text-[20px] font-extrabold italic">
              {dateToString(day.datetime).slice(0, 3)}
            </p>

            <div className="flex w-full justify-center gap-1.5 font-mono text-[13px] italic">
              <h1>{temperatureConverter(day.tempmax, temperatureUnit)}°</h1>
              <h1>|</h1>
              <h1>{temperatureConverter(day.tempmin, temperatureUnit)}°</h1>
            </div>
          </div>
        ))}
    </motion.section>
  );
}
