import * as React from "react";

export interface DashboardShellProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function DashboardShell({
  className,
  ...props
}: DashboardShellProps) {
  return <div className="my-10 px-10" {...props} />;
}
