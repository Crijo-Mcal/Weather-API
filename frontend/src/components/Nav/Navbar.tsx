import { useState } from "react";
import { motion } from "framer-motion";

/* images */
import searchIcon from "../../assets/img/search.png";
import instagramIcon from "../../assets/img/instagram.png";
import githubIcon from "../../assets/img/github.png";

/* components */
import PopUp from "./Popup";
import type { ResponseData } from "../../types/WeatherData";

/*type*/
type params = {
  setQueryLocation: React.Dispatch<React.SetStateAction<string>>;
  setWeatherData: React.Dispatch<React.SetStateAction<ResponseData | null>>;
  history: string[];
};

export default function Navbar({
  setQueryLocation,
  setWeatherData,
  history,
}: params) {
  const [formValue, setFormValue] = useState<string>("");
  const [isPopupActive, setIsPopupActive] = useState<boolean>(false);

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setWeatherData(null);
    setQueryLocation(formValue);
    setFormValue("");
    setIsPopupActive(false);
  }

  return (
    <motion.nav
      className="bg-bg sticky top-0 z-10 flex h-20 w-full items-center justify-center sm:mt-6 sm:h-auto sm:bg-transparent md:relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
    >
      <div
        className="flex h-auto w-full max-w-199.5 flex-col gap-1"
        onMouseLeave={() => setIsPopupActive(false)}
      >
        {/* FORM */}
        <form
          className="bg-primary rounded-default flex h-9.75 w-full max-w-199.5 justify-center overflow-hidden"
          onSubmit={handleSubmitForm}
        >
          <input
            className="h-full w-full max-w-199.5 pl-10 outline-none"
            type="text"
            placeholder="location"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            onClick={() => setIsPopupActive(true)}
          />

          <button
            className="flex h-full w-[20%] items-center justify-center"
            type="submit"
          >
            <img className="h-6 w-6" src={searchIcon} alt="searchIcon" />
          </button>
        </form>

        {/* POPUP */}
        {isPopupActive && history.length !== 0 && (
          <PopUp
            history={history}
            setQueryLocation={setQueryLocation}
            setPopupaCtive={setIsPopupActive}
            setWeatherData={setWeatherData}
          />
        )}
      </div>

      {/*social media*/}
      <div className="hidden h-9.75 w-full max-w-25 items-center justify-around lg:flex">
        <a href="https://github.com/Crijo-Mcal/Weather-API">
          <img className="h-8 w-8 cursor-pointer" src={githubIcon} />
        </a>
        <a href="https://www.instagram.com/crijo95/">
          <img className="h-8 w-8 cursor-pointer" src={instagramIcon} />
        </a>
      </div>
    </motion.nav>
  );
}
