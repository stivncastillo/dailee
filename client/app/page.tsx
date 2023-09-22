"use client";
import HabitsTrackingTableContainer from "@/features/Dashboard/HabitsTrakingTable";
import OverviewCardContainer from "@/features/Dashboard/OverviewCard";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 pt-4">
      <div className="grid grid-flow-row auto-rows-max gap-8">
        <OverviewCardContainer />
        <HabitsTrackingTableContainer />
      </div>
    </section>
  );
}
