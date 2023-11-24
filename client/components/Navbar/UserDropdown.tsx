import React from "react";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

const UserDropdown = () => {
  const { data } = useSession();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          className="w-6 h-6 text-tiny"
          as="button"
          isBordered
          radius="full"
          name={data?.user?.name.slice(0, 2) || "User"}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="light">
        <DropdownItem key="profile" className="h-14 gap-2">
          <User
            name={data?.user?.name || "User"}
            description={data?.user?.email || ""}
            classNames={{
              name: "text-default-600",
              description: "text-default-500",
            }}
            avatarProps={{
              size: "sm",
              name: data?.user?.name.slice(0, 2) || "User",
            }}
          />
        </DropdownItem>
        <DropdownItem
          key="signout"
          onClick={() => {
            signOut({
              callbackUrl: "/",
            });
          }}
        >
          Sing out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropdown;
