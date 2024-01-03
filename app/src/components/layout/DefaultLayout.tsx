import React from "react";

import { Navbar } from "../navigation/Navbar";
import { MAIN_NAVIGATION } from "@/lib/config";

interface DefaultLayoutProps {
  children: React.ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="hidden flex-col md:flex">
      <Navbar items={MAIN_NAVIGATION} />
      <main className="flex-1 space-y-4 p-8">{children}</main>
    </div>
  );
};

export default DefaultLayout;
