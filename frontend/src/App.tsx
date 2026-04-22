import { motion } from "framer-motion";

import { useEffect, useState } from "react";

/* services */
import apicall from "./services/backend_Api_Handle";
import { getLocalStorege, setLocalStorege } from "./services/localStorage";

/* utility */
import { isLatLng } from "./utility/utility";

/* tipy and image */
import type { ResponseData } from "./types/WeatherData";
import imgBg from "./assets/img/bg.webp";

/* components */
import Footer from "./components/Footer";
import Navbar from "./components/Nav/Navbar";
import WeatherMainCard from "./components/WeatherMainCard/WeatherMainCard";
import ForecastList from "./components/ForecastList";
import WeatherChart from "./components/WeatherChart";

function App() {
  // 🔹 State
  const [history, setHistory] = useState<string[]>([]);
  const [queryLocation, setQueryLocation] = useState<string>("");
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [weatherData, setWeatherData] = useState<ResponseData | null>(null);
  const [temperatureUnit, setTemperatureUnit] = useState<"C" | "F">("C");

  // 🔹 Derived data
  const resolvedLocationName = weatherData?.data?.resolvedAddress ?? null;
  const timezone = weatherData?.data?.timezone ?? null;
  const selectedDayWeather =
    weatherData?.data?.days?.[selectedDayIndex] ?? null;

  useEffect(() => {
    async function fetchWeather() {
      const result = await apicall(queryLocation);
      setWeatherData(result);

      /* save localstorage */
      if (result && result.data && !isLatLng(result.data.resolvedAddress)) {
        setLocalStorege(result.data.address);
      }
      setHistory(getLocalStorege());
    }

    fetchWeather();
  }, [queryLocation]);

  return (
    <>
      <main className="font-ALpino relative m-0 flex h-screen w-full items-center justify-center text-[16px]">
        <img
          className="absolute hidden h-full w-full object-cover object-center lg:flex"
          src={imgBg}
          alt="bgimg"
        />
        <div className="absolute hidden h-full w-full bg-black opacity-70 lg:flex"></div>

        <motion.section
          className="md:rounded-default bg-gradient1 relative h-full w-full max-w-238.25 lg:max-h-151.25"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 100, y: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Navbar
            setQueryLocation={setQueryLocation}
            setWeatherData={setWeatherData}
            history={history}
          />

          {/* main info */}
          {weatherData && weatherData.success && (
            <>
              <div className="mt-6 flex h-auto w-full flex-col items-center justify-evenly gap-6 lg:flex-row lg:gap-0">
                <WeatherMainCard
                  selectedDayWeather={selectedDayWeather}
                  resolvedLocationName={resolvedLocationName}
                  timezone={timezone}
                  temperatureUnit={temperatureUnit}
                  setTemperatureUnit={setTemperatureUnit}
                />

                <div className="flex h-auto w-full justify-center lg:hidden">
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
              <div className="mt-10 hidden h-auto w-full justify-center lg:flex">
                <WeatherChart
                  selectedDayWeather={selectedDayWeather}
                  temperatureUnit={temperatureUnit}
                />
              </div>
            </>
          )}

          {/* error hadle */}
          {weatherData && !weatherData.success && (
            <div className="mt-6 flex h-[80%] w-full justify-center">
              <div className="rounded-default flex h-full w-[94%] items-center justify-center">
                {weatherData && !weatherData.success && (
                  <div className="text-[20px] text-red-400">
                    {weatherData.err?.status !== 500 && (
                      <h1 className="text-[20px] text-red-400">
                        {weatherData.err?.message}
                      </h1>
                    )}
                    {weatherData.err?.status === 500 && (
                      <h1 className="text-[20px] text-yellow-400">
                        {weatherData.err?.message}
                      </h1>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* loading */}
          {!weatherData && (
            <div className="mt-6 flex h-[80%] w-full justify-center">
              <div className="rounded-default flex h-full w-[94%] items-center justify-center">
                <div className="border-gradient1 border-t-primary h-8 w-8 animate-spin rounded-full border-4"></div>
              </div>
            </div>
          )}
          <Footer />
        </motion.section>
      </main>
    </>
  );
}

export default App;
