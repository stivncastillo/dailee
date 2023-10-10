import { useQuery } from "@apollo/client";

import { GetTaskComplexitiesDocument } from "@/graphql/codegen/graphql";

const useGetTaskComplexities = () => {
  const { data, loading, error } = useQuery(GetTaskComplexitiesDocument, {
    fetchPolicy: "cache-first",
  });

  return { data, loading, error };
};

export default useGetTaskComplexities;
