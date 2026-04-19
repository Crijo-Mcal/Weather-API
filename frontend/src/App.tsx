import imgBg from "./assets/img/bg.webp";

/* components */
import Navbar from "./components/Nav/Navbar";
import WeatherMainCard from "./components/WeatherMainCard/WeatherMainCard";
import ForecastList from "./components/ForecastList/ForecastList";
import WeatherChart from "./components/WeatherChart/WeatherChart";
import {useEffect, useState} from "react";

import apicall from "./api/apiHandle";

/* example data for chart */
import {alldataexample as alldata} from "./dataSxample/data";

import type {WeatherData} from "./types/WeatherData";

function App() {
  const [dataForChart, setDataForChart] = useState(alldata[0]);
  const [location, setLocation] = useState("coimbra");

  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

  const [data, setData] = useState<WeatherData | null>(null);
  const locationName = data?.resolvedAddress ?? null;
  const day = data?.days?.[selectedDayIndex] ?? null;
  const [unit, setUnit] = useState<"C" | "F">("C");

  useEffect(() => {
    async function loadData() {
      const dataBackend = await apicall(location);
      setData(dataBackend);
    }
    loadData();
  }, []);

  return (
    <>
      {/* background */}
      <main
        className="m-0 p-0 relative h-screen w-full bg-center bg-cover bg-no-repeat flex justify-center items-center font-ALpino text-[16px]"
        style={{backgroundImage: `url(${imgBg})`}}
      >
        <div className="absolute w-full h-full bg-black opacity-35"></div>

        <section className="relative w-full max-w-[953px] h-full  lg:max-h-[605px]   md:rounded-default bg-gradient1 ">
          <Navbar />
          <div className="w-full h-auto mt-6 flex flex-col gap-4 md:gap-0 md:flex-row justify-evenly items-center ">
            <WeatherMainCard
              day={day}
              locationName={locationName}
              unit={unit}
              setUnit={setUnit}
            />
            <ForecastList data={data} setDataForChart={setDataForChart} />
          </div>

          <div className="w-full h-auto mt-6 flex justify-center">
            <WeatherChart dataForChart={dataForChart} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
