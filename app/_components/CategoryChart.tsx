"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { colors_Bar } from "../_utils/constants";

function CategoryChart() {
  return (
    <div className="bg-white  rounded-lg shadow-md lg:w-[50%] w-full py-4 px-5 ">
      <h2 className="font-semibold text-lg">
        Category divisions and categories distribution
      </h2>
 
        {/* <ResponsiveContainer width="100%" height={332}>
          <RadarChart
        
            data={data}
            margin={{ top: 20, right: 30, bottom: 5, left: 20 }}
          >
            <PolarGrid  />
            <PolarAngleAxis dataKey="category" fontSize={10} />
            <PolarRadiusAxis angle={30} domain={[0, "dataMax"]} />
            <Radar
              name="Divisions"
              dataKey="divisionCount"
              stroke={colors_Bar[0]}
              fill={colors_Bar[0]}
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer> */}
   
    </div>
  );
}

export default CategoryChart;
