import React, { createContext, useCallback, useContext } from "react";

import { ApolloError } from "@apollo/client";

import { useToast } from "@/components/ui/use-toast";
import useCreateHabitLog from "@/hooks-api/useCreateHabitLog";
import useGetHabits from "@/hooks-api/useGetHabits";
import { Habit } from "@/lib/graphql/codegen/graphql";

export interface HabitLogsContextType {
  habits: Habit[];
  loadingHabits?: boolean;
  errorHabits?: ApolloError;
  onCreateHabitLog: (habitId: string) => void;
  createHabitLogLoading?: boolean;
  createHabitLogError?: ApolloError;
}

const DEFAULT_VALUES = {
  habits: [],
  onCreateHabitLog: () => {},
};

const HabitLogsContext = createContext<HabitLogsContextType>(DEFAULT_VALUES);

const HabitLogsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { toast } = useToast();
  const {
    data: dataHabits,
    loading: loadingHabits,
    error: errorHabits,
  } = useGetHabits();

  const {
    createHabitLog,
    loading: createHabitLogLoading,
    error: createHabitLogError,
  } = useCreateHabitLog();

  const handlePlusClick = useCallback(
    async (habitId: string) => {
      try {
        await createHabitLog(habitId);
      } catch (error) {
        if (error instanceof ApolloError) {
          toast({
            title: error.message,
            variant: "destructive",
          });
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [createHabitLog],
  );

  return (
    <HabitLogsContext.Provider
      value={{
        habits: dataHabits?.habits ?? [],
        loadingHabits,
        errorHabits,
        onCreateHabitLog: handlePlusClick,
        createHabitLogLoading,
        createHabitLogError,
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
