import { HTMLAttributes } from "react";

import Head from "next/head";
import { Inter } from "next/font/google";

import Navbar from "@gizmo/components//Navbar";
import Sidenav from "@gizmo/components/Sidenav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export default function Layout({ title, ...props }: LayoutProps) {
  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>{title}</title>
      </Head>
      <Sidenav />
      <Navbar />
      <div className="absolute bottom-0 left-64 right-0 top-20" {...props} />
    </main>
  );
}
