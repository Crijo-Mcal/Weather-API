import type { ResponseData } from "../../types/WeatherData";
type Props = {
  history: string[];
  setQueryLocation: React.Dispatch<React.SetStateAction<string>>;
  setPopupaCtive: React.Dispatch<React.SetStateAction<boolean>>;
  setWeatherData: React.Dispatch<React.SetStateAction<ResponseData | null>>;
};

export default function PopUp({
  history,
  setQueryLocation,
  setPopupaCtive,
  setWeatherData,
}: Props) {
  return (
    <div className="bg-primary rounded-default absolute top-15 flex min-h-20 w-full max-w-199.5 flex-col items-center py-4 sm:max-w-90 md:top-10">
      <h1>Recent</h1>

      {history && (
        <ol className="flex w-[90%] flex-wrap gap-2">
          {history.map((x, y) => (
            <li
              key={y}
              className="border-bg flex-1 cursor-pointer truncate pl-1 text-center text-slate-500 hover:border-b"
              onClick={() => {
                setQueryLocation(x);
                setPopupaCtive(false);
                setWeatherData(null);
              }}
            >
              {x}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
