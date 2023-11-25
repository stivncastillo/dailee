"use client";
import { useMemo } from "react";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useSession } from "next-auth/react";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

export const ApolloProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();

  const client = useMemo(() => {
    const authMiddleware = setContext((operation, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${session?.user.token}`,
        },
      };
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    });
  }, [session?.user.token]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
