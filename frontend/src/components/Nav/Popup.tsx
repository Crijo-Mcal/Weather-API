type Props = {
  history: string[];
  setQueryLocation: React.Dispatch<React.SetStateAction<string>>;
  setPopupaCtive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PopUp({
  history,
  setQueryLocation,
  setPopupaCtive,
}: Props) {
  return (
    <div className="absolute top-15 md:top-10 w-full max-w-199.5 sm:max-w-90 min-h-20 py-4 bg-primary rounded-default flex flex-col items-center">
      <h1>Recent</h1>

      {history && (
        <ol className="w-[90%] flex flex-wrap gap-x-2">
          {history.map((x, y) => (
            <li
              key={y}
              className="w-auto h-7 pl-1 text-slate-500 hover:border-b border-bg cursor-pointer"
              onClick={() => {
                setQueryLocation(x);
                setPopupaCtive(false);
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
