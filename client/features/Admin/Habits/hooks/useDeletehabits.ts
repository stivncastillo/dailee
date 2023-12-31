import { useMutation } from "@apollo/client";

import {
  DeleteHabitsDocument,
  DeleteHabitsInput,
  DeleteHabitsMutation,
  DeleteHabitsMutationVariables,
} from "@/graphql/codegen/graphql";

const useDeleteHabits = () => {
  const [onDeleteHabits, { data, loading, error }] = useMutation<
    DeleteHabitsMutation,
    DeleteHabitsMutationVariables
  >(DeleteHabitsDocument, { refetchQueries: "active" });

  const deleteHabits = async ({ ids }: DeleteHabitsInput): Promise<void> => {
    await onDeleteHabits({
      variables: {
        deleteHabitsInput: {
          ids,
        },
      },
    });
  };

  return { deleteHabits, data, loading, error };
};

export default useDeleteHabits;
