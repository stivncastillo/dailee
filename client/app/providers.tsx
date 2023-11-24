"use client";

import * as React from "react";

import { ApolloProvider } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import createApolloClient from "../apollo-client";
import SessionAuthProvider from "@/providers/SessionAuthProvider";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const client = createApolloClient();

  return (
    <SessionAuthProvider>
      <ApolloProvider client={client}>
        <NextUIProvider>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </NextUIProvider>
      </ApolloProvider>
    </SessionAuthProvider>
  );
}
