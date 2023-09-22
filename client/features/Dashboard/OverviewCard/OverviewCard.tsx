import { subtitle, title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import { useOverviewCardContext } from "./OverviewCardContext";

const OverviewCard = () => {
  const { dailyStats, weeklyStats } = useOverviewCardContext();

  return (
    <div className="flex flex-row gap-4">
      <Card shadow="none" className=" flex-shrink-0 flex-grow">
        <CardHeader>
          <h2 className={subtitle({ class: "mb-4" })}>Overview</h2>
        </CardHeader>
        <CardBody className="flex flex-row justify-start items-center gap-8">
          <div className=" flex flex-col gap-2 justify-center items-start">
            <h2 className={title({ color: "foreground", size: "md" })}>
              {dailyStats?._sum?.points}
            </h2>
            <span className=" text-default-400 text-sm">Points today.</span>
          </div>
          <div className=" flex flex-col gap-2 justify-center items-start">
            <h2 className={title({ color: "foreground", size: "md" })}>
              {dailyStats?._avg?.points.toFixed(1)}
            </h2>
            <span className=" text-default-400 text-sm">Average today.</span>
          </div>
          <div className=" flex flex-col gap-2 justify-center items-start">
            <h2 className={title({ color: "foreground", size: "md" })}>
              {weeklyStats?._sum?.points}
            </h2>
            <span className=" text-default-400 text-sm">Points this week.</span>
          </div>
          <div className=" flex flex-col gap-2 justify-center items-start">
            <h2 className={title({ color: "foreground", size: "md" })}>
              {weeklyStats?._avg?.points.toFixed(1)}
            </h2>
            <span className=" text-default-400 text-sm">Average this week</span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default OverviewCard;
