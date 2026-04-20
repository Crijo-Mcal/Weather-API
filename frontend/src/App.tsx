import imgBg from "./assets/img/bg.webp";

/* components */
import Navbar from "./components/Nav/Navbar";
import WeatherMainCard from "./components/WeatherMainCard/WeatherMainCard";
import ForecastList from "./components/ForecastList/ForecastList";
import WeatherChart from "./components/WeatherChart/WeatherChart";

import {useEffect, useState} from "react";

import apicall from "./api/apiHandle";

import type {WeatherData} from "./types/WeatherData";

function App() {
  // 🔹 State
  const [queryLocation, setQueryLocation] = useState<string>("coimbra");
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [temperatureUnit, setTemperatureUnit] = useState<"C" | "F">("C");

  // 🔹 Derived data

  const resolvedLocationName = weatherData?.resolvedAddress ?? null;
  const timezone = weatherData?.timezone ?? null;
  const selectedDayWeather = weatherData?.days?.[selectedDayIndex] ?? null;

  // 🔹 Fetching
  useEffect(() => {
    if (!queryLocation) return;

    async function fetchWeather() {
      const result = await apicall(queryLocation);
      setWeatherData(result);
    }

    fetchWeather();
  }, [queryLocation]);

  return (
    <>
      {/* background */}
      <main
        className="m-0 p-0 relative h-screen w-full bg-center bg-cover bg-no-repeat flex justify-center items-center font-ALpino text-[16px]"
        style={{backgroundImage: `url(${imgBg})`}}
      >
        <div className="absolute w-full h-full bg-black opacity-35"></div>

        <section className="relative w-full max-w-[953px] h-full  lg:max-h-[605px]   md:rounded-default bg-gradient1 ">
          <Navbar setQueryLocation={setQueryLocation} />

          <div className="w-full h-auto mt-6 gap-6 lg:gap-0 flex flex-col   lg:flex-row justify-evenly items-center ">
            <WeatherMainCard
              selectedDayWeather={selectedDayWeather}
              resolvedLocationName={resolvedLocationName}
              timezone={timezone}
              temperatureUnit={temperatureUnit}
              setTemperatureUnit={setTemperatureUnit}
            />

            <div className="w-full h-auto  lg:hidden flex justify-center ">
              <WeatherChart
                selectedDayWeather={selectedDayWeather}
                temperatureUnit={temperatureUnit}
              />
            </div>

            <ForecastList
              weatherData={weatherData}
              temperatureUnit={temperatureUnit}
              selectedDayIndex={selectedDayIndex}
              setSelectedDayIndex={setSelectedDayIndex}
            />
          </div>
          <div className="w-full h-auto mt-10 hidden lg:flex justify-center ">
            <WeatherChart
              selectedDayWeather={selectedDayWeather}
              temperatureUnit={temperatureUnit}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
