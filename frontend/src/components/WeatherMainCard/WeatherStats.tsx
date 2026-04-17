import huminity from "../../assets/img/humidity.png";
import wind from "../../assets/img/wind.png";

export default function WeatherStats() {
  return (
    <div className="absolute bottom-0 w-full h-18.75  flex justify-center  gap-10">
      <div className=" flex  justify-center items-center gap-2">
        <img className="w-6.25 ml-2" src={huminity} alt="huminity" />
        <h3 className="text-primary">70%</h3>
      </div>
      <div className=" flex justify-center items-center gap-2">
        <img className="w-6.25 ml-2" src={wind} alt="wind" />
        <h3 className="text-primary">70%</h3>
      </div>
    </div>
  );
}
