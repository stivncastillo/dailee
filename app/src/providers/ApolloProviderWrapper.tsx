import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { useUser } from "./UserProvider";

const httpLink = new HttpLink({
  uri: "http://localhost:3001/graphql",
});

export const ApolloProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useUser();

  const client = () => {
    const authMiddleware = setContext((_operation, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${user?.accessToken}`,
        },
      };
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    });
  };

  // @ts-ignore
  return <ApolloProvider client={client()}>{children}</ApolloProvider>;
};
