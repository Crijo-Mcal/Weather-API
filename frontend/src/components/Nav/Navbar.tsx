import searchIcon from "../../assets/img/search.png";
import instagramIcon from "../../assets/img/instagram.png";
import githubIcon from "../../assets/img/github.png";
import {useState} from "react";

/* module */
import {
  getLocalStorege,
  setLocalStorege,
} from "../../localStorages/localStorage";

/* component */
import PopUp from "./Popup";

/*  */
type params = {
  setQueryLocation: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({setQueryLocation}: params) {
  const [history, setHistory] = useState<string[]>(getLocalStorege() ?? []);

  const [formValue, setFormValue] = useState<string>("");
  const [isPopupActive, setIsPopupActive] = useState<boolean>(false);

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!history.includes(formValue)) {
      const updateHistory = [formValue.trim(), ...history];
      setHistory(updateHistory);
      setLocalStorege(updateHistory);
    }

    setQueryLocation(formValue);
    setFormValue("");
    setIsPopupActive(false);
  }

  return (
    <nav className="sticky top-0 md:relative w-full h-20 sm:h-auto  sm:mt-6  flex justify-center items-center z-10  bg-bg sm:bg-transparent">
      <div
        className="w-full max-w-199.5 h-auto flex flex-col gap-1"
        onMouseLeave={() => setIsPopupActive(false)}
      >
        {/* FORM */}
        <form
          className="w-full max-w-199.5 h-9.75 bg-primary rounded-default overflow-hidden flex justify-center "
          onSubmit={handleSubmitForm}
        >
          <input
            className="w-full max-w-[798px] h-full outline-none pl-10"
            type="text"
            placeholder="location"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            onClick={() => setIsPopupActive(true)}
          />

          <button
            className="w-[20%] h-full flex justify-center items-center"
            type="submit"
          >
            <img className="w-6 h-6" src={searchIcon} alt="searchIcon" />
          </button>
        </form>

        {/* POPUP */}
        {isPopupActive && history.length !== 0 && (
          <PopUp
            history={history}
            setQueryLocation={setQueryLocation}
            setPopupaCtive={setIsPopupActive}
          />
        )}
      </div>

      {/* SOCIAL MEDIA */}
      <div className="w-full max-w-25 h-9.75 hidden lg:flex justify-around items-center">
        <a href="https://github.com/Crijo-Mcal/Weather-API">
          <img className="w-8 h-8 cursor-pointer" src={githubIcon} />
        </a>
        <a href="https://www.instagram.com/crijo95/">
          <img className="w-8 h-8 cursor-pointer" src={instagramIcon} />
        </a>
      </div>
    </nav>
  );
}
