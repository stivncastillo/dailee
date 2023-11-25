import { useMutation } from "@apollo/client";

import {
  GetHabitsDocument,
  CreateHabitTrackingInput,
  UpsertHabitTrackingDocument,
  UpsertHabitTrackingMutation,
  UpsertHabitTrackingMutationVariables,
  GetHabitTrackingsDocument,
  GetWeeklyPointsDocument,
} from "@/graphql/codegen/graphql";

const useCreateHabitTracking = () => {
  const [onCreate, { data, loading, error }] = useMutation<
    UpsertHabitTrackingMutation,
    UpsertHabitTrackingMutationVariables
  >(UpsertHabitTrackingDocument, {
    refetchQueries: [
      GetHabitsDocument,
      GetHabitTrackingsDocument,
      GetWeeklyPointsDocument,
    ],
  });

  const createHabitTracking = async ({
    points,
    date,
    habitId,
  }: Pick<
    CreateHabitTrackingInput,
    "habitId" | "points" | "date"
  >): Promise<void> => {
    await onCreate({
      variables: {
        createInput: {
          habitId,
          points,
          date,
        },
      },
    });
  };

  return { createHabitTracking, data, loading, error };
};

export default useCreateHabitTracking;
