import Location from "./Location";
import WeatherStats from "./WeatherStats";

export default function WeatherMainCard() {
  return (
    <section className="relative w-full md:w-106.75 h-74.75 flex flex-col justify-center   bg-bg md:rounded-default overflow-hidden m-2 ">
      <Location />

      <div className="w-full h-50 mb-10  flex flex-col justify-center items-center overflow-hidden">
        <h1 className=" text-primary text-[102px] text- font-bold ">90°</h1>
        <h2 className="text-[20px] text-primary font-medium">
          Storm with Rain
        </h2>
      </div>

      <WeatherStats />
    </section>
  );
}
