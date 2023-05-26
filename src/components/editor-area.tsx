"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function EditorArea() {
  const editor = useEditor({
    extensions: [StarterKit]
  });

  return <EditorContent editor={editor} />;
}
