import * as React from "react";

import { notFound } from "next/navigation";

import UserNavMenu from "@gizmo/components/user-nav-menu";
import getCurrentUser from "@gizmo/utils/auth/getCurrentUser";

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
          <h1>sample</h1>
          <UserNavMenu user={user} />
        </div>
      </header>
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}
