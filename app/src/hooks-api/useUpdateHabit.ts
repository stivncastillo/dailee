import { useMutation } from "@apollo/client";

import {
  GetHabitsDocument,
  UpdateHabitDocument,
  UpdateHabitInput,
  UpdateHabitMutation,
  UpdateHabitMutationVariables,
} from "@/lib/graphql/codegen/graphql";

const useUpdateHabit = () => {
  const [onUpdateHabit, { data, loading, error }] = useMutation<
    UpdateHabitMutation,
    UpdateHabitMutationVariables
  >(UpdateHabitDocument, {
    refetchQueries: [GetHabitsDocument],
  });

  const updateHabit = async (data: UpdateHabitInput): Promise<void> => {
    await onUpdateHabit({
      variables: {
        updateHabitInput: data,
      },
    });
  };

  return { updateHabit, data, loading, error };
};

export default useUpdateHabit;
