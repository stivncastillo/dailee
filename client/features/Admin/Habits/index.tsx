import React from "react";

import { HabitsProvider } from "./HabitsContext";
import HabitsTable from "./HabitsTable";

const HabitsTableContainer = () => {
  return (
    <HabitsProvider>
      <HabitsTable />
    </HabitsProvider>
  );
};

export default HabitsTableContainer;
