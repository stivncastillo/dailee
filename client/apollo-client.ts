import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://localhost:3001/graphql",
    connectToDevTools: true,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
