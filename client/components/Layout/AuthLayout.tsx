import React, { useEffect } from "react";

import { useTheme } from "next-themes";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="relative hidden h-full flex-col p-10 lg:flex bg-foreground-900">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-white mb-10">
            Welcome to Habit Tracker
          </h1>
          <p className="text-white text-lg">
            Habit Tracker is a simple app that helps you track your habits.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center h-full p-10 lg:flex">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
