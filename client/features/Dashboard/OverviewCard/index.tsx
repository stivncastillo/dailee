import React from "react";

import OverviewCard from "./OverviewCard";
import { OverviewCardProvider } from "./OverviewCardContext";

const OverviewCardContainer = () => {
  return (
    <OverviewCardProvider>
      <OverviewCard />
    </OverviewCardProvider>
  );
};

export default OverviewCardContainer;
