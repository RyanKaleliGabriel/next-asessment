"use client";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { colors_Donut } from "../_utils/constants";

function ManufacturerChart() {
  return (
    <div className="bg-white rounded-lg shadow-md lg:w-[50%] w-full py-4 px-5">
      <h2 className="font-semibold text-lg">
        No. Products and manufacturer distribution
      </h2>
      {/* <ResponsiveContainer width="100%" height={332}>
        <PieChart>
          <Pie
            data={data}
            nameKey="manufacturer"
            dataKey="productCount"
            innerRadius={80}
            outerRadius={100}
            cx="48%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((entry: any, index: number) => (
              <Cell
                fontSize={10}
                key={entry.manufacturer}
                fill={colors_Donut[index % colors_Donut.length]}
                stroke={colors_Donut[index % colors_Donut.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconSize={5}
            iconType="circle"
            fontSize={5}
          />
        </PieChart>
      </ResponsiveContainer> */}
    </div>
  );
}

export default ManufacturerChart;
