import { Inter } from "next/font/google";

import EditorArea from "@gizmo/components/EditorArea";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <EditorArea isEditable={true} />
    </main>
  );
}
