"use client";

import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { colors_Bar } from "../_utils/constants";

function StockChart({ data }: any) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="bg-white  rounded-lg shadow-md  w-full py-4 px-5 ">
      <h2 className="font-semibold text-lg">Stock Status Distribution</h2>

      <ResponsiveContainer width="100%" height={332}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, bottom: 5, left: 20 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="quantity"
            // stroke={colors_Bar[0]}
            // fill={colors_Bar[0]}
            // fillOpacity={0.6}
          >
            {data.map((entry: any, index: number) => (
              <Cell
                key={entry.quantity}
                fill={colors_Bar[index % colors_Bar.length]}
                stroke={colors_Bar[index % colors_Bar.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockChart;
