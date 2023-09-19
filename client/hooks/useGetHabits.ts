import { GetHabitsDocument } from "@/graphql/codegen/graphql";
import { useQuery } from "@apollo/client";

const useGetHabits = () => {
  const { data, loading, error } = useQuery(GetHabitsDocument, {
    fetchPolicy: "cache-and-network",
  });


  return { data, loading, error }
}

export default useGetHabits;