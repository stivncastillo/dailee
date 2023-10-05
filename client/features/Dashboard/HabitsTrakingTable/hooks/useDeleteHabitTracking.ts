import { useMutation } from "@apollo/client";

import {
  DeleteHabitTrackingDocument,
  DeleteHabitTrackingInput,
  DeleteHabitTrackingMutation,
  DeleteHabitTrackingMutationVariables,
  GetHabitTrackingAggregateDocument,
  GetHabitTrackingsDocument,
  GetHabitsDocument,
} from "@/graphql/codegen/graphql";

const useDeleteHabitTracking = () => {
  const [onDelete, { data, loading, error }] = useMutation<
    DeleteHabitTrackingMutation,
    DeleteHabitTrackingMutationVariables
  >(DeleteHabitTrackingDocument, {
    refetchQueries: [
      GetHabitsDocument,
      GetHabitTrackingsDocument,
      GetHabitTrackingAggregateDocument,
    ],
  });

  const deleteHabitTracking = async ({
    date,
    habitId,
  }: Pick<DeleteHabitTrackingInput, "habitId" | "date">): Promise<void> => {
    await onDelete({
      variables: {
        deleteHabitTracking: { habitId, date },
      },
    });
  };

  return { deleteHabitTracking, data, loading, error };
};

export default useDeleteHabitTracking;
