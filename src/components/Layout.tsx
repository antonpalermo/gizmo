import { HTMLAttributes, useEffect } from "react";

import Head from "next/head";
import { Inter } from "next/font/google";

import Modal from "@gizmo/components/Modal";
import Navbar from "@gizmo/components//Navbar";
import Sidenav from "@gizmo/components/_Sidenav";

import { useScratchStore } from "@gizmo/store";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export default function Layout({ title, ...props }: LayoutProps) {
  const setScratches = useScratchStore(selector => selector.setScratches);

  async function getSidenavLinks() {
    const request = await fetch("/api/scratches");
    const scratches = await request.json();
    setScratches(scratches);
  }

  useEffect(() => {
    getSidenavLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>{title}</title>
      </Head>
      <Modal />
      <Navbar />
      <Sidenav />
      <div className="absolute bottom-0 left-64 right-0 top-20">
        <div className="mx-10" {...props} />
      </div>
    </main>
  );
}
