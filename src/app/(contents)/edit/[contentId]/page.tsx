import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Blog Post"
};

import EditorArea from "@gizmo/components/editor-area";

export default async function ContentEditor() {
  return <EditorArea />;
}
