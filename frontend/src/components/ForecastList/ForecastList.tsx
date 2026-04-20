import img from "../../assets/img/default.png";
import {temperatureConverter, dateToString} from "../../utility/utility";

/* type */
import type {WeatherData} from "../../types/WeatherData";

type params = {
  weatherData: WeatherData | null;
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
  const days = weatherData?.days ?? null;

  return (
    <section className="relative p-6 lg:p-4 gap-[10px] w-full lg:w-106.75 h-full min-h-74.75 flex flex-wrap justify-center  items-center   bg-bg lg:rounded-default overflow-hidden text-[16px] text-primary  lg:shadow-lg shadow-gradient2">
      {days &&
        days.map((x, y) => (
          <div
            className={`h-23 w-[90px] flex flex-col bg-bg justify-center items-center rounded-default cursor-pointer transition-all duration-300 ease-in-out transform ${selectedDayIndex === y ? "shadow-gradient2 scale-106 shadow-lg" : "shadow-gradient1 scale-100 shadow-md"}`}
            key={y}
            onClick={() => setSelectedDayIndex(y)}
          >
            <img className="w-[30px]" src={img} alt="image" />
            <p>{dateToString(days[y].datetime)}</p>
            <div className="w-full flex justify-center gap-2 text-[16px]">
              <h1>{temperatureConverter(days[y].tempmax, temperatureUnit)}°</h1>
              <h1>{temperatureConverter(days[y].tempmin, temperatureUnit)}°</h1>
            </div>
          </div>
        ))}
    </section>
  );
}
