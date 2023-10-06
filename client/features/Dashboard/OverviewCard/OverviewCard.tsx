import React from "react";

import { useOverviewCardContext } from "./OverviewCardContext";
import DashboardCard from "@/components/Cards/DashboardCard";
import { title } from "@/components/primitives";

const OverviewCard = () => {
  const { dailyStats, weeklyStats } = useOverviewCardContext();

  return (
    <DashboardCard title="Overview">
      <div className="flex flex-row justify-start items-center gap-8 py-4">
        <div className=" flex flex-col gap-2 justify-center items-start">
          <h2 className={title({ color: "foreground", size: "md" })}>
            {dailyStats?._sum?.points ?? 0}
          </h2>
          <span className=" text-default-400 text-sm">Points today.</span>
        </div>
        <div className=" flex flex-col gap-2 justify-center items-start">
          <h2 className={title({ color: "foreground", size: "md" })}>
            {dailyStats?._avg?.points?.toFixed(1) ?? 0}
          </h2>
          <span className=" text-default-400 text-sm">Average today.</span>
        </div>
        <div className=" flex flex-col gap-2 justify-center items-start">
          <h2 className={title({ color: "foreground", size: "md" })}>
            {weeklyStats?._sum?.points ?? 0}
          </h2>
          <span className=" text-default-400 text-sm">Points this week.</span>
        </div>
        <div className=" flex flex-col gap-2 justify-center items-start">
          <h2 className={title({ color: "foreground", size: "md" })}>
            {weeklyStats?._avg?.points?.toFixed(1) ?? 0}
          </h2>
          <span className=" text-default-400 text-sm">Average this week</span>
        </div>
      </div>
    </DashboardCard>
  );
};

export default OverviewCard;
