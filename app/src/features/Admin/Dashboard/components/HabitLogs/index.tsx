import React from "react";

import HabitLogs from "./HabitLogs";
import { HabitLogsProvider } from "./HabitLogsContext";

interface HabitLogContainerProps {}

const HabitLogContainer: React.FC<HabitLogContainerProps> = () => {
  return (
    <HabitLogsProvider>
      <HabitLogs />
    </HabitLogsProvider>
  );
};

export default HabitLogContainer;
