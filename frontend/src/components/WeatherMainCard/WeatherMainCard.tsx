import {useState} from "react";
/* components */
import Location from "./Location";
import WeatherStats from "./WeatherStats";
/* type */
import type {WeatherData} from "../../types/WeatherData";
/* utility */
import {celsiusConverter} from "../../utility/utility";

type params = {
  data: WeatherData | null;
};

export default function WeatherMainCard({data}: params) {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const day = data?.days?.[selectedDayIndex] ?? null;
  const temp = day?.temp ?? null;
  const condition = day?.conditions ?? null;

  const location = data?.resolvedAddress ?? null;

  return (
    <section className="relative w-full md:w-106.75 h-74.75 flex flex-col justify-center   bg-bg md:rounded-default overflow-hidden m-2 ">
      <Location day={day} location={location} />

      <div className="w-full h-50 mb-10  flex flex-col justify-center items-center overflow-hidden">
        <h1 className=" text-primary text-[102px] text- font-bold ">
          {temp && celsiusConverter(temp)}°
        </h1>
        <h2 className="text-[20px] text-primary font-medium">{condition}</h2>
      </div>

      <WeatherStats day={day} />
    </section>
  );
}
