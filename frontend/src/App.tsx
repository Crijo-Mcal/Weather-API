import imgBg from "./assets/img/bg.webp";

/* components */
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <>
      {/* background */}
      <main
        className="relative h-screen w-full bg-center bg-cover bg-no-repeat flex justify-center items-center font-ALpino text-[16px]"
        style={{backgroundImage: `url(${imgBg})`}}
      >
        <div className="absolute w-full h-full bg-black opacity-35"></div>

        <section className="relative w-full max-w-[953px] h-full  lg:max-h-[605px]  rounded-default bg-gradient1">
          <Navbar />
          <div className="w-50 h-50 bg-red-400 mt-5"></div>
        </section>
      </main>
    </>
  );
}

export default App;
