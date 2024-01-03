import { useMutation } from "@apollo/client";

import {
  CreateHabitLogDocument,
  CreateHabitLogInput,
  CreateHabitLogMutation,
  CreateHabitLogMutationVariables,
  GetHabitsDocument,
} from "@/lib/graphql/codegen/graphql";

const useCreateHabitLog = () => {
  const [onCreateHabitLog, { data, loading, error }] = useMutation<
    CreateHabitLogMutation,
    CreateHabitLogMutationVariables
  >(CreateHabitLogDocument, {
    refetchQueries: [GetHabitsDocument],
  });

  const createHabitLog = async (habitId: CreateHabitLogInput["habit_id"]): Promise<void> => {
    await onCreateHabitLog({
      variables: {
        createHabitLogInput: {
          habit_id: habitId,
        },
      },
    });
  };

  return { createHabitLog, data, loading, error };
};

export default useCreateHabitLog;
