import img from "../../assets/img/default.png";
import {temperatureConverter} from "../../utility/utility";

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
    <section className="relative p-4 gap-[10px] w-full md:w-106.75 h-auto min-h-74.75 flex flex-wrap justify-center  items-center   bg-bg md:rounded-default overflow-hidden m-2 text-[16px] text-primary  ">
      {days &&
        days.map((x, y) => (
          <div
            className={`h-23 w-[90px] flex flex-col  justify-center items-center border-[1px] px-2 border-primary rounded-default  cursor-pointer ${selectedDayIndex === y ? "bg-gradient1" : "bg-transparent"}`}
            key={y}
            onClick={() => setSelectedDayIndex(y)}
          >
            <img className="w-[30px]" src={img} alt="image" />
            <p>friday</p>
            <div className="w-full flex justify-center gap-2 text-[16px]">
              <h1>{temperatureConverter(days[y].tempmax, temperatureUnit)}°</h1>
              <h1>{temperatureConverter(days[y].tempmin, temperatureUnit)}°</h1>
            </div>
          </div>
        ))}
    </section>
  );
}
