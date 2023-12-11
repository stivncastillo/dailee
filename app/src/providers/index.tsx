import React from "react";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import { ApolloProviderWrapper } from "./ApolloProviderWrapper";
import { AuthProvider } from "./AuthProvider";
import ErrorBoundary from "./ErrorBoundary";
import { UserProvider } from "./UserProvider";

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
        <ApolloProviderWrapper>
          <AuthProvider>{children}</AuthProvider>
        </ApolloProviderWrapper>
      </UserProvider>
    </ErrorBoundary>
  );
};

export default Providers;
