import {useState} from "react";
/* components */
import Location from "./Location";
import WeatherStats from "./WeatherStats";
/* type */
import type {WeatherData} from "../../types/WeatherData";
/* utility */
import {temperatureConverter} from "../../utility/utility";

import type {Day} from "../../types/WeatherData";

type params = {
  day: Day | null;
  locationName: string | null;
  unit: "C" | "F";
  setUnit: React.Dispatch<React.SetStateAction<"C" | "F">>;
};

export default function WeatherMainCard({
  day,
  locationName,
  unit,
  setUnit,
}: params) {
  const temp = day?.temp ?? null;
  const condition = day?.conditions ?? null;

  return (
    <section className="relative w-full md:w-106.75 h-74.75 flex flex-col justify-center   bg-bg md:rounded-default overflow-hidden m-2 ">
      {day && (
        <>
          <Location
            day={day}
            locationName={locationName}
            unit={unit}
            setUnit={setUnit}
          />

          <div className="w-full h-50 mb-10  flex flex-col justify-center items-center overflow-hidden">
            <h1 className=" text-primary text-[102px] text- font-bold ">
              {temp && temperatureConverter(temp, unit)}°
            </h1>
            <h2 className="text-[20px] text-primary font-medium">
              {condition}
            </h2>
          </div>

          <WeatherStats day={day} />
        </>
      )}
    </section>
  );
}
