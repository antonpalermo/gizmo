import { useEffect } from "react";
import { Inter } from "next/font/google";

import { useScratchStore } from "@gizmo/store";

import Navbar from "@gizmo/components/Navbar";
import Sidenav from "@gizmo/components/Sidenav";
import EditorArea from "@gizmo/components/EditorArea";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export default function Home() {
  const [scratches, initScratch] = useScratchStore(
    ({ scratches, initScratch }) => [scratches, initScratch]
  );

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
