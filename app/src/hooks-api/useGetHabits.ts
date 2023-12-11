import { useQuery } from '@apollo/client';

import { GetHabitsDocument, SortOrder } from '@/lib/graphql/codegen/graphql';

const useGetHabits = () => {
  const { data, loading, error } = useQuery(GetHabitsDocument, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: [
        {
          created_at: SortOrder.Asc,
        }
      ],
    }
  });

  return { data, loading, error };
};

export default useGetHabits;
