import React from "react";

import NavItem from "./NavItem";
import UserMenu from "./UserMenu";
import { MainNavigationItem } from "@/lib/config";
import { cn } from "@/lib/utils";

interface NavbarProps {
  items: Array<MainNavigationItem>;
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <nav className={cn("flex items-center space-x-4 lg:space-x-6 mx-6")}>
          {items.map((item) => (
            <NavItem item={item} key={item.name} />
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
