"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { MainMenu } from "@gizmo/libs/links";

export default function DashboardSidenav() {
  const path = usePathname();

  return (
    <nav className="w-full my-10">
      <div className="mb-6 space-y-2">
        {MainMenu.map(menu => (
          <Link
            key={menu.label}
            href={menu.href}
            className={`${
              path === menu.href ? "bg-gray-100" : ""
            } block w-full rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-100`}
          >
            {menu.label}
          </Link>
        ))}
      </div>
      <span className="text-xs font-semibold text-gray-500">Your Rooms</span>
      <div className="py-3">
        <Link
          href={"/"}
          className={`${
            path === "/dashboard/some-id" ? "bg-gray-100" : ""
          } block w-full rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-100`}
        >
          BSIT 1A Section 1
        </Link>
      </div>
    </nav>
  );
}
