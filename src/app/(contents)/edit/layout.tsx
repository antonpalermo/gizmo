import * as React from "react";

export interface ContentEditorLayoutProps {
  children: React.ReactNode;
}

export default async function ContentEditorLayout({
  children
}: ContentEditorLayoutProps) {
  return <div>{children}</div>;
}
