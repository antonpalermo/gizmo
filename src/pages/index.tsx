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
      <Navbar />
      <div className="absolute bottom-0 left-64 right-0 top-20">
        <EditorArea isEditable={true} />
      </div>
    </main>
  );
}
