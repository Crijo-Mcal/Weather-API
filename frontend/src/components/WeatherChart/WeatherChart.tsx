import {AreaChart, Area, ResponsiveContainer, XAxis, YAxis} from "recharts";
import type {Day} from "../../types/WeatherData";
import {temperatureConverter} from "../../utility/utility";

type params = {
  selectedDayWeather: Day | null;
  temperatureUnit: "C" | "F";
};

export default function WeatherChart({
  selectedDayWeather,
  temperatureUnit,
}: params) {
  const data = selectedDayWeather?.hours ?? [];

  return (
    <div className="w-full  max-w-[893px] h-[149px] bg-bg md:rounded-default ">
      {data && (
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{top: 30, right: 20, left: 20, bottom: 10}}
          >
            <XAxis dataKey="datetime" />
            <YAxis hide />

            <Area
              type="monotone"
              dataKey="temp"
              stroke="none"
              fill="#969899"
              dot={({cx, cy, payload}) => (
                <g>
                  <circle cx={cx} cy={cy} r={5} fill="#FFFFFF" />
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dy="-10"
                    fill="#fff"
                    fontSize="16"
                  >
                    {temperatureConverter(payload.temp, temperatureUnit)}°
                  </text>
                </g>
              )}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
