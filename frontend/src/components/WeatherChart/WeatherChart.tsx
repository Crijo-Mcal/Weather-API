import {AreaChart, Area, ResponsiveContainer, XAxis, YAxis} from "recharts";

type params = {
  dataForChart: object[];
};

export default function WeatherChart({dataForChart}: params) {
  return (
    <div className="w-full  max-w-[893px] h-[149px] bg-bg md:rounded-default ">
      <ResponsiveContainer>
        <AreaChart
          data={dataForChart}
          margin={{top: 30, right: 20, left: 20, bottom: 10}}
        >
          <XAxis dataKey="time" tickFormatter={(value) => value} />
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
                  {payload.temp}°
                </text>
              </g>
            )}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
