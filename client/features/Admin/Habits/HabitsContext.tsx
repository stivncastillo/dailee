import {
  GetHabitsDocument,
  Habit,
  CreateHabitDocument,
  CreateHabitMutation,
  CreateHabitMutationVariables,
  CreateHabitInput,
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
  createHabit: (data: CreateHabitInput) => Promise<void>;
  createHabitData: Habit | null;
  createHabitLoading: boolean;
  createHabitError?: ApolloError;
  habitToEdit: Habit | null;
  setHabitToEdit: Dispatch<SetStateAction<Habit | null>>;
  habitToDelete: Habit | null;
  setHabitToDelete: Dispatch<SetStateAction<Habit | null>>;
  updateHabit: (data: UpdateHabitInput) => Promise<void>;
  updateHabitData: UpdateHabitMutation | null | undefined;
  updateHabitLoading: boolean;
  updateHabitError?: ApolloError;
  deleteHabit: (data: DeleteHabitInput) => Promise<void>;
  deleteHabitLoading: boolean;
};

const DEFAULT_VALUES = {
  items: [],
  loading: false,
  createHabit: async () => {},
  createHabitData: null,
  createHabitLoading: false,
  habitToEdit: null,
  setHabitToEdit: () => {},
  habitToDelete: null,
  setHabitToDelete: () => {},
  updateHabit: async () => {},
  updateHabitData: null,
  updateHabitLoading: false,
  deleteHabit: async () => {},
  deleteHabitLoading: false,
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
  const [
    onCreateHabit,
    {
      data: createHabitData,
      loading: createHabitLoading,
      error: createHabitError,
    },
  ] = useMutation<CreateHabitMutation, CreateHabitMutationVariables>(
    CreateHabitDocument,
    { refetchQueries: "active" }
  );
  const [
    onUpdateHabit,
    {
      data: updateHabitData,
      loading: updateHabitLoading,
      error: updateHabitError,
    },
  ] = useMutation<UpdateHabitMutation, UpdateHabitMutationVariables>(
    UpdateHabitDocument,
    { refetchQueries: "active" }
  );
  const [onDeleteHabit, { loading: deleteHabitLoading }] = useMutation<
    DeleteHabitMutation,
    DeleteHabitMutationVariables
  >(DeleteHabitDocument, { refetchQueries: "active" });

  const createHabit = async ({
    name,
    dueDate,
    isPaused = false,
  }: CreateHabitInput): Promise<void> => {
    await onCreateHabit({
      variables: {
        createHabitInput: {
          isPaused,
          name,
          dueDate: dueDate === "" ? null : dueDate,
        },
      },
    });
  };

  const updateHabit = async ({
    id,
    name,
    dueDate,
    isPaused = false,
  }: UpdateHabitInput): Promise<void> => {
    await onUpdateHabit({
      variables: {
        updateHabitInput: {
          id,
          isPaused,
          name,
          dueDate: dueDate === "" ? null : dueDate,
        },
      },
    });
  };

  const deleteHabit = async ({ id }: DeleteHabitInput): Promise<void> => {
    await onDeleteHabit({
      variables: {
        deleteHabitInput: {
          id,
        },
      },
    });
  };

  return (
    <HabitsContext.Provider
      value={{
        items: data?.habits ?? [],
        loading,
        error,
        createHabit,
        createHabitData: createHabitData?.createHabit ?? null,
        createHabitLoading,
        createHabitError,
        habitToEdit,
        setHabitToEdit,
        updateHabit,
        updateHabitData,
        updateHabitLoading,
        updateHabitError,
        deleteHabit,
        deleteHabitLoading,
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
