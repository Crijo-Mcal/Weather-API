import img from "../../assets/img/default.png";

type params = {
  setDataForChart: React.Dispatch<
    React.SetStateAction<
      {
        time: string;
        temp: number;
      }[]
    >
  >;
};

/* example data for chart */
import {alldataexample as alldata} from "../../dataSxample/data";

export default function ForecastList({setDataForChart}: params) {
  return (
    <section className="relative p-4 gap-2 w-full md:w-106.75 h-74.75 flex flex-col  items-center   bg-bg md:rounded-default overflow-hidden m-2 text-[16px] text-primary  ">
      {Array.from({length: 6}).map((x, y) => (
        <div
          className="flex-1 w-full flex gap-3 justify-between items-center border-[1px] px-2 border-primary rounded-default cursor-pointer"
          key={y}
          onClick={() => setDataForChart(alldata[y + 1])}
        >
          <img className="w-[30px]" src={img} alt="image" />
          <p> coimbra</p>
          <p> 12/04/2026 (friday) </p>
          <h1>90°</h1>
        </div>
      ))}
    </section>
  );
}
