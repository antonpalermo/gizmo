"use client";

import { User } from "next-auth";
import { Menu } from "@headlessui/react";

import Link from "next/link";
import Image from "next/image";

export interface UserNavMenuProps {
  user: Pick<User, "name" | "image" | "email">;
}

export default function UserNavMenu({ user }: UserNavMenuProps) {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="flex rounded-full focus:outline-none focus:ring-2 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          {user && (
            <Image
              className="rounded-full"
              width={35}
              height={35}
              src={user.image!}
              alt={`${user.name}'s user avatar`}
            />
          )}
        </Menu.Button>
      </div>
      <Menu.Items className="absolute right-0 mt-2 min-w-[263px] origin-right rounded-md border border-gray-100 bg-white shadow-sm">
        <div className="divide-y pt-3">
          <div className="px-5">
            <h3 className="font-medium leading-relaxed">{user.name}</h3>
            <span className="mb-3 block text-sm text-gray-500">
              {user.email}
            </span>
          </div>
          <div className="p-1">
            <Menu.Item>
              <Link
                href={"/"}
                className="block rounded px-4 py-2 text-sm hover:bg-gray-100"
              >
                Profile
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href={"/"}
                className="block rounded px-4 py-2 text-sm hover:bg-gray-100"
              >
                Accounts
              </Link>
            </Menu.Item>
          </div>
          <div className="p-1">
            <Menu.Item>
              <Link
                href={"/"}
                className="block rounded px-4 py-2 text-sm hover:bg-gray-100"
              >
                Settings
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href={"/"}
                className="block rounded px-4 py-2 text-sm hover:bg-gray-100"
              >
                Sign Out
              </Link>
            </Menu.Item>
          </div>
        </div>
      </Menu.Items>
    </Menu>
  );
}
