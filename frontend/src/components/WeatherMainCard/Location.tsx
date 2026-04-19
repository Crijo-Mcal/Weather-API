import img from "../../assets/img/default.png";

import type {Day} from "../../types/WeatherData";

type params = {
  day: Day | null;
  location: string | null;
};

export default function location({day, location}: params) {
  return (
    <div className="absolute top-2 w-full h-18.75  flex items-center justify-around font-mono text-primary">
      <div className="w-auto h-full flex gap-3">
        <img className="w-16.25 h-16.25" src={img} alt="default" />
        <h1 className="mt-3 text-[16px] ">{day?.datetime}</h1>
        <h1 className="mt-3 max-w-30 text-[16px] truncate ">{location}</h1>
      </div>
      <div className="h-full text-[16px] font-mono text-primary">
        <h1 className="mt-3">
          C/<samp className="opacity-50">F</samp>
        </h1>
      </div>
    </div>
  );
}
