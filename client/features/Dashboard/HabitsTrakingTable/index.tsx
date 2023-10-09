"use client";
import React from "react";

import dayjs from "dayjs";

import { HabitsTrackingProvider } from "./HabitsTrackingContext";
import HabitsTrakingTable from "./HabitsTrakingTable";
import DashboardCard from "@/components/Cards/DashboardCard";
import { getCurrentWeek } from "@/helpers/date";

const HabitsTrackingTableContainer = () => {
  const week = getCurrentWeek();
  const weekStr = `Week ${dayjs(week[0].date).format("MMM DD")} to ${dayjs(
    week[week.length - 1].date,
  ).format("MMM DD")}`;

  return (
    <HabitsTrackingProvider>
      <DashboardCard title="Habits" subtitle={weekStr}>
        <HabitsTrakingTable />
      </DashboardCard>
    </HabitsTrackingProvider>
  );
};

export default HabitsTrackingTableContainer;
