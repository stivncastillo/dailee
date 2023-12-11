import { useMutation } from "@apollo/client";

import {
  DeleteHabitsDocument,
  DeleteManyInput,
  DeleteHabitsMutation,
  DeleteHabitsMutationVariables,
} from "@/lib/graphql/codegen/graphql";

const useDeleteHabits = () => {
  const [onDeleteHabits, { data, loading, error }] = useMutation<
    DeleteHabitsMutation,
    DeleteHabitsMutationVariables
  >(DeleteHabitsDocument, { refetchQueries: "active" });

  const deleteHabits = async ({ ids }: DeleteManyInput): Promise<void> => {
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
