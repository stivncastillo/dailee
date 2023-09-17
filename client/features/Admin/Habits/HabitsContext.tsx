import {
  GetHabitsDocument,
  Habit,
  UpdateHabitDocument,
  UpdateHabitMutation,
  UpdateHabitMutationVariables,
  UpdateHabitInput,
  DeleteHabitDocument,
  DeleteHabitMutation,
  DeleteHabitMutationVariables,
  DeleteHabitInput,
} from "@/graphql/codegen/graphql";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ApolloError, useMutation, useQuery } from "@apollo/client";

export type HabitsContextType = {
  items: Habit[];
  loading: boolean;
  error?: ApolloError;
  habitToEdit: Habit | null;
  setHabitToEdit: Dispatch<SetStateAction<Habit | null>>;
  habitToDelete: Habit | null;
  setHabitToDelete: Dispatch<SetStateAction<Habit | null>>;
};

const DEFAULT_VALUES = {
  items: [],
  loading: false,
  habitToEdit: null,
  setHabitToEdit: () => {},
  habitToDelete: null,
  setHabitToDelete: () => {},
};

const HabitsContext = createContext<HabitsContextType>(DEFAULT_VALUES);

const HabitsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [habitToEdit, setHabitToEdit] = useState<Habit | null>(null);
  const [habitToDelete, setHabitToDelete] = useState<Habit | null>(null);
  const { data, loading, error } = useQuery(GetHabitsDocument, {
    fetchPolicy: "cache-and-network",
  });

  return (
    <HabitsContext.Provider
      value={{
        items: data?.habits ?? [],
        loading,
        error,
        habitToEdit,
        setHabitToEdit,
        habitToDelete,
        setHabitToDelete,
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
