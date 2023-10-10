import { FetchResult, useMutation } from "@apollo/client";

import {
  CreateTaskDocument,
  CreateTaskInput,
  CreateTaskMutation,
  CreateTaskMutationVariables,
  GetTasksDocument,
} from "@/graphql/codegen/graphql";

const useCreateTask = () => {
  const [onCreateTask, { data, loading, error, called }] = useMutation<
    CreateTaskMutation,
    CreateTaskMutationVariables
  >(CreateTaskDocument, { refetchQueries: [GetTasksDocument] });

  const createTask = async (
    data: CreateTaskInput,
  ): Promise<FetchResult<CreateTaskMutation>> => {
    return await onCreateTask({
      variables: {
        createTaskInput: {
          ...data,
        },
      },
    });
  };

  return { createTask, data, loading, error, called };
};

export default useCreateTask;
