import React from "react";

import { NavLink } from "react-router-dom";

import { MainNavigationItem } from "@/lib/config";

type Props = {
  item: MainNavigationItem;
};

const NavItem: React.FC<Props> = ({ item }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `text-sm font-medium transition-colors hover:underline ${
          isActive && "underline"
        }`
      }
      key={item.name}
      to={item.path}
    >
      {item.name}
    </NavLink>
  );
};

export default NavItem;
