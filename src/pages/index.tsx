import { useState } from "react";
import { Inter } from "next/font/google";

import Navbar from "@gizmo/components/Navbar";
import Sidenav from "@gizmo/components/Sidenav";
import EditorArea from "@gizmo/components/EditorArea";
import { useScratchStore } from "@gizmo/store";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export default function Home() {
  const selectedScratch = useScratchStore(state => state.selectedScratch);

  return (
    <main className={`${inter.className}`}>
      <Sidenav />
      <Navbar />
      <div className="absolute bottom-0 left-64 right-0 top-20">
        {!selectedScratch ? (
          <h1>No Selected Strach</h1>
        ) : (
          <EditorArea isEditable={true} />
        )}
      </div>
    </main>
  );
}
