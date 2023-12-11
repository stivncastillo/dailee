import React, { createContext, useState, useContext, useEffect } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";
import { UserFieldsFragment } from "@/lib/graphql/codegen/graphql";

export interface IUser {
  accessToken: string;
  refreshToken: string;
  user: UserFieldsFragment;
}

interface UserContextProps {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => null,
});

const UserProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [value] = useLocalStorage<IUser | null>("user", null);

  useEffect(() => {
    if (value) {
      setUser(value);
    }
  }, [value, setUser]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser, UserContext };
