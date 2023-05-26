import * as React from "react";

import { notFound } from "next/navigation";

import UserNavMenu from "@gizmo/components/user-nav-menu";
import getCurrentUser from "@gizmo/libs/auth/getCurrentUser";
import DashboardSidenav from "@gizmo/components/sidenav";
import Link from "next/link";

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children
}: DashboardLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen flex-col space-y-5">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-slate-50">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="inline-flex items-center space-x-3">
            <h1>sample</h1>
            <Link
              href={"/dashboard/blogs"}
              className="rounded px-3 py-2 font-medium text-gray-600 hover:bg-gray-300 hover:text-gray-900"
            >
              Blogs
            </Link>
          </div>
          <UserNavMenu user={user} />
        </div>
      </header>
      <div className="container mx-auto grid gap-10 md:grid-cols-[230px_1fr]">
        <aside className="hidden w-[230px] md:flex">
          <DashboardSidenav />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
