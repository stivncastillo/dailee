"use client";
import HabitsTrackingTableContainer from "@/features/Dashboard/HabitsTrakingTable";
import OverviewCardContainer from "@/features/Dashboard/OverviewCard";
import TasksTableContainer from "@/features/Dashboard/TasksTable";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 pt-4">
      <div className="grid grid-cols-2 grid-rows-dashboard gap-8 auto-rows-max auto-cols-max">
        <div className="col-span-2 items-stretch">
          <OverviewCardContainer />
        </div>
        <div className="row-start-2">
          <HabitsTrackingTableContainer />
        </div>
        <div className="row-start-2">
          <TasksTableContainer />
        </div>
      </div>
    </section>
  );
}
