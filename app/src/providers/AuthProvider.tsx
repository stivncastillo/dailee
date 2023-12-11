import React, { createContext, useContext } from "react";

import { ApolloError } from "@apollo/client";

import { IUser, useUser } from "./UserProvider";
import useLocalStorage from "@/hooks/useLocalStorage";
import useSignIn from "@/hooks-api/useSignIn";

interface AuthContextProps {
  signIn: (email: string, password: string) => Promise<IUser | void>;
  // refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  signIn: async () => {},
  // refreshToken: async () => {},
});

const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { setUser } = useUser();
  const { onSignIn } = useSignIn();
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [_, setValue] = useLocalStorage<IUser | null>("user", null);

  const signIn = async (email: string, password: string) => {
    try {
      const data = await onSignIn({ email, password });

      if (data?.user) {
        setUser(data);
        setValue(data);
      }
    } catch (error: unknown) {
      if (error instanceof ApolloError) {
        throw new ApolloError(error);
      }
      throw new Error("Something went wrong");
    }
  };

  // const refreshToken = async () => {
  //   const response = await fetch("/api/auth/refresh-token", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (response.ok) {
  //     const data = await response.json();
  //     const { id, name, email } = data.user;

  //     setUser({ id, name, email });
  //   } else {
  //     // Handle refresh token error
  //   }
  // };

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, AuthContext, useAuth };
