"use client";

import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { ApolloProviderWrapper } from "@/providers/ApolloWrapperProvider";
import SessionAuthProvider from "@/providers/SessionAuthProvider";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <SessionAuthProvider>
      <ApolloProviderWrapper>
        <NextUIProvider>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </NextUIProvider>
      </ApolloProviderWrapper>
    </SessionAuthProvider>
  );
}
