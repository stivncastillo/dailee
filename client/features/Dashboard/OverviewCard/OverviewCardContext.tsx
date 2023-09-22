import {
  GetHabitTrackingAggregateDocument,
  HabitTrackingAggregate,
} from "@/graphql/codegen/graphql";
import React, { createContext, useContext, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { getCurrentWeek } from "../HabitsTrakingTable/utils/helpers";

export type OverviewCardContextType = {
  dailyStats: HabitTrackingAggregate | null;
  dailyStatsLoading: boolean;
  weeklyStats: HabitTrackingAggregate | null;
  weeklyStatsLoading: boolean;
};

const DEFAULT_VALUES = {
  dailyStats: null,
  dailyStatsLoading: false,
  weeklyStats: null,
  weeklyStatsLoading: false,
};

const OverviewCardContext =
  createContext<OverviewCardContextType>(DEFAULT_VALUES);

const OverviewCardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const today = useMemo(() => new Date(), []);
  const week = getCurrentWeek();

  const { data: dailyStatsData, loading: dailyStatsLoading } = useQuery(
    GetHabitTrackingAggregateDocument,
    {
      fetchPolicy: "network-only",
      variables: {
        dateStart: today.toISOString().split("T")[0],
        dateEnd: today.toISOString().split("T")[0],
      },
    }
  );

  const { data: weeklyStatsData, loading: weeklyStatsLoading } = useQuery(
    GetHabitTrackingAggregateDocument,
    {
      fetchPolicy: "network-only",
      variables: {
        dateStart: week[0].date,
        dateEnd: week[week.length - 1].date,
      },
    }
  );

  return (
    <OverviewCardContext.Provider
      value={{
        dailyStats: dailyStatsData?.habitTrackingsAggregate ?? null,
        dailyStatsLoading: dailyStatsLoading,
        weeklyStats: weeklyStatsData?.habitTrackingsAggregate ?? null,
        weeklyStatsLoading: weeklyStatsLoading,
      }}
    >
      {children}
    </OverviewCardContext.Provider>
  );
};

const useOverviewCardContext = () => {
  const context = useContext(OverviewCardContext);
  if (context === undefined) {
    throw new Error(
      "useOverviewCardContext must be used within a OverviewCardProvider"
    );
  }
  return context;
};

export { OverviewCardContext, OverviewCardProvider, useOverviewCardContext };
