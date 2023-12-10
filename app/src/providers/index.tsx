import React from "react";

import { ApolloProvider } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import { AuthProvider } from "./AuthProvider";
import ErrorBoundary from "./ErrorBoundary";
import { UserProvider } from "./UserProvider";
import client from "@/lib/apollo";

loadDevMessages();
loadErrorMessages();

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <UserProvider>
        {/* @ts-ignore */}
        <ApolloProvider client={client}>
          <AuthProvider>{children}</AuthProvider>
        </ApolloProvider>
      </UserProvider>
    </ErrorBoundary>
  );
};

export default Providers;
