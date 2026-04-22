import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from "recharts";
import type { Day } from "../types/WeatherData";
import { temperatureConverter } from "../utility/utility";

type params = {
  selectedDayWeather: Day | null;
  temperatureUnit: "C" | "F";
};

export default function WeatherChart({
  selectedDayWeather,
  temperatureUnit,
}: params) {
  const data = selectedDayWeather?.hours ?? [];
  let dataEdit = data.filter((_, y) => y % 2 == 0);

  return (
    <motion.section
      className="bg-bg lg:rounded-default shadow-gradient2 h-37.25 w-full max-w-223.25 shadow-lg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {data && (
        <ResponsiveContainer width="100%" height={149}>
          <AreaChart
            data={dataEdit}
            margin={{ top: 30, right: 20, left: 20, bottom: 10 }}
          >
            <XAxis
              dataKey="datetime"
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <YAxis hide />

            <Area
              type="monotone"
              dataKey="temp"
              stroke="none"
              fill="#969899"
              animationBegin={500}
              animationDuration={800}
              dot={({ cx, cy, payload }) => (
                <g>
                  <circle cx={cx} cy={cy} r={3} fill="#FFFFFF" />
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
    </motion.section>
  );
}
