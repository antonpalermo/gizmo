import { Inter } from "next/font/google";

import Navbar from "@gizmo/components/Navbar";
import Sidenav from "@gizmo/components/Sidenav";
import EditorArea from "@gizmo/components/EditorArea";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Sidenav />
      <div className="absolute inset-y-0 left-64 right-0 mx-10">
        <Navbar />
        <div className="relative top-24">
          <EditorArea isEditable={true} />
        </div>
      </div>
    </main>
  );
}
