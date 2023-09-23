import React from "react";

import { HabitsTrackingProvider } from "./HabitsTrackingContext";
import HabitsTrakingTable from "./HabitsTrakingTable";

const HabitsTrackingTableContainer = () => {
  return (
    <HabitsTrackingProvider>
      <HabitsTrakingTable />
    </HabitsTrackingProvider>
  );
};

export default HabitsTrackingTableContainer;
