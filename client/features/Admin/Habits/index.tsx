import React from "react";
import HabitsTable from "./HabitsTable";
import { HabitsProvider } from "./HabitsContext";

type Props = {};

const HabitsTableContainer = (props: Props) => {
  return (
    <HabitsProvider>
      <HabitsTable />
    </HabitsProvider>
  );
};

export default HabitsTableContainer;
