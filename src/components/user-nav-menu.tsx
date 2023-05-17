"use client";

import { User } from "next-auth";
import { Menu } from "@headlessui/react";

import Link from "next/link";
import UserAvatar from "@gizmo/components/user-avatar";

export interface UserNavMenuProps {
  user: Pick<User, "name" | "image" | "email">;
}

export default function UserNavMenu({ user }: UserNavMenuProps) {
  return (
    <Menu as="div" className="relative block">
      <Menu.Button className="inline-flex items-center">
        <UserAvatar user={{name: user.name, image: user.image}} />
      </Menu.Button>
      <Menu.Items>
        <div className="p-1">
          <Menu.Item>
            <Link href="/">{"Sample"}</Link>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
