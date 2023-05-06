import { useEffect } from "react";

import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";

import { useScratchStore } from "@gizmo/store";

import baseUrl from "@gizmo/utils/baseUrl";

import Navbar from "@gizmo/components/Navbar";
import Sidenav from "@gizmo/components/Sidenav";
import EditorArea from "@gizmo/components/EditorArea";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const getServerSideProps: GetServerSideProps = async () => {
  const request = await fetch(`${baseUrl()}/api/scratches`);
  const scratches = await request.json();

  return {
    props: { scratches }
  };
};

export interface HomeProps {
  scratches: [];
}

export default function Home({ scratches }: HomeProps) {
  const [_, initScratch] = useScratchStore(({ scratches, initScratch }) => [
    scratches,
    initScratch
  ]);

  useEffect(() => {
    initScratch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={`${inter.className}`}>
      <Sidenav />
      <Navbar />
      <div className="absolute bottom-0 left-64 right-0 top-20">
        {!scratches ? (
          <h1>No Selected Strach</h1>
        ) : (
          <EditorArea isEditable={true} />
        )}
      </div>
    </main>
  );
}
