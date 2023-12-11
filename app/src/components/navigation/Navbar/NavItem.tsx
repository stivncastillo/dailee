import React from "react";

import { Link } from "react-router-dom";

import { MainNavigationItem } from "@/lib/config";

type Props = {
  item: MainNavigationItem;
};

const NavItem: React.FC<Props> = ({ item }) => {
  return (
    <Link
      className="text-sm font-medium transition-colors hover:text-primary"
      key={item.name}
      to={item.path}
    >
      {item.name}
    </Link>
  );
};

export default NavItem;
