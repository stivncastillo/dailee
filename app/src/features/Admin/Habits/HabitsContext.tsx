import React, { createContext, useContext } from "react";

import { ApolloError } from "@apollo/client";

import useGetHabits from "@/hooks-api/useGetHabits";
import { Habit } from "@/lib/graphql/codegen/graphql";

export type HabitsContextType = {
  items: Habit[];
  loading: boolean;
  error?: ApolloError;
};

const DEFAULT_VALUES = {
  items: [],
  loading: false,
};

const HabitsContext = createContext<HabitsContextType>(DEFAULT_VALUES);

const HabitsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, loading, error } = useGetHabits();
  return (
    <HabitsContext.Provider
      value={{
        items: data?.habits ?? [],
        loading,
        error,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

const useHabitsContext = () => {
  const context = useContext(HabitsContext);
  if (context === undefined) {
    throw new Error("useHabitsContext must be used within a HabitsProvider");
  }
  return context;
};

export { HabitsContext, HabitsProvider, useHabitsContext };
