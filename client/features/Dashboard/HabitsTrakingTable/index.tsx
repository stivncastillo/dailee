import React from "react";
import HabitsTrakingTable from "./HabitsTrakingTable";
import { HabitsTrackingProvider } from "./HabitsTrackingContext";

type Props = {};

const HabitsTrackingTableContainer = (props: Props) => {
  return (
    <HabitsTrackingProvider>
      <HabitsTrakingTable />
    </HabitsTrackingProvider>
  );
};

export default HabitsTrackingTableContainer;
