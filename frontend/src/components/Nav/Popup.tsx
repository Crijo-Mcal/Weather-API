import { motion } from "framer-motion";
import type { ResponseData } from "../../types/WeatherData";
type Props = {
  history: string[];
  setQueryLocation: React.Dispatch<React.SetStateAction<string>>;
  setPopupaCtive: React.Dispatch<React.SetStateAction<boolean>>;
  setWeatherData: React.Dispatch<React.SetStateAction<ResponseData | null>>;
};

function ClockIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function PopUp({
  history,
  setQueryLocation,
  setPopupaCtive,
  setWeatherData,
}: Props) {
  return (
    // pt-2 instead of margin so the gap still counts as "inside" for hover
    <div className="absolute top-full left-0 z-20 w-full pt-2">
      <motion.div
        className="rounded-default overflow-hidden bg-white text-slate-700 shadow-xl ring-1 shadow-black/30 ring-black/5"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <p className="px-4 pt-3 pb-1 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
          Recent searches
        </p>

        <ul className="max-h-64 overflow-y-auto pb-2">
          {history.map((x) => (
            <li key={x}>
              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-[15px] capitalize transition-colors hover:bg-slate-100 active:bg-slate-200 sm:py-2"
                onClick={() => {
                  setQueryLocation(x);
                  setPopupaCtive(false);
                  setWeatherData(null);
                }}
              >
                <span className="text-slate-400">
                  <ClockIcon />
                </span>
                <span className="truncate">{x}</span>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
