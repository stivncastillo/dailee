import { useQuery } from "@apollo/client";

import { GetHabitsDocument } from "@/graphql/codegen/graphql";

const useGetHabits = () => {
  const { data, loading, error } = useQuery(GetHabitsDocument, {
    fetchPolicy: "cache-and-network",
  });

  return { data, loading, error };
};

export default useGetHabits;
