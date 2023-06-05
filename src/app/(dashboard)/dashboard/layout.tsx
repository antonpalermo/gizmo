import * as React from "react";

import { notFound } from "next/navigation";

import UserNavMenu from "@gizmo/components/user-nav-menu";
import getCurrentUser from "@gizmo/libs/auth/getCurrentUser";
import DashboardSidenav from "@gizmo/components/side-nav";

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children
}: DashboardLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    // TODO: if no user then return to login page
    // TODO: should be handled in the middleware
    return notFound();
  }

  return (
    <main className="grid min-h-screen divide-x md:grid-cols-[316px_1fr]">
      <aside className="hidden w-[316px] px-10 md:flex md:flex-col">
        <DashboardSidenav />
      </aside>
      <div>
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-slate-50 py-4">
          <div className="container mx-auto flex w-full items-center justify-end px-10">
            <UserNavMenu user={user} />
          </div>
        </header>
        {children}
      </div>
    </main>
  );
}
