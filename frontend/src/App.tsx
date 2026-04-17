import imgBg from "./assets/img/bg.webp";

/* components */
import Navbar from "./components/Nav/Navbar";
import WeatherMainCard from "./components/WeatherMainCard/WeatherMainCard";
import ForecastList from "./components/ForecastList/ForecastList";

function App() {
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
            <WeatherMainCard />
            <ForecastList />
          </div>

          <div className="w-full h-auto mt-6 flex justify-center">
            <div className="w-full  max-w-[893px] h-[149px] bg-bg rounded-default"></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
