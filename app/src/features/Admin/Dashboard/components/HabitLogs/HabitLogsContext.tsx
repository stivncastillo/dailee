import React, { createContext, useContext } from "react";

import { ApolloError } from "@apollo/client";

import useGetHabits from "@/hooks-api/useGetHabits";
import { Habit } from "@/lib/graphql/codegen/graphql";

export interface HabitLogsContextType {
  habits: Habit[];
  loadingHabits?: boolean;
  errorHabits?: ApolloError;
}

const DEFAULT_VALUES = {
  habits: [],
};

const HabitLogsContext = createContext<HabitLogsContextType>(DEFAULT_VALUES);

const HabitLogsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    data: dataHabits,
    loading: loadingHabits,
    error: errorHabits,
  } = useGetHabits();

  return (
    <HabitLogsContext.Provider
      value={{
        habits: dataHabits?.habits ?? [],
        loadingHabits,
        errorHabits,
      }}
    >
      {children}
    </HabitLogsContext.Provider>
  );
};

const useHabitLogsContext = () => {
  const context = useContext(HabitLogsContext);
  if (context === undefined) {
    throw new Error(
      "useHabitLogsContext must be used within a HabitLogsProvider",
    );
  }
  return context;
};

export { HabitLogsContext, HabitLogsProvider, useHabitLogsContext };
