import React from "react";

import Tooltip from "../feedback/Tooltip";
import { Progress } from "../ui/progress";
type DataType = { value: number; tooltip: string };
interface WeeklyBarChartProps {
  data?: Array<DataType>;
  className?: string;
}

const WeeklyBarChart: React.FC<WeeklyBarChartProps> = ({ data }) => {
  return (
    <div className="flex flex-1 h-full flex-col justify-around">
      {data?.map((value, index) => (
        <Tooltip key={index} text={value.tooltip}>
          <Progress variant="info" size="sm" value={value.value} max={100} />
        </Tooltip>
      ))}
    </div>
  );
};

export default WeeklyBarChart;
