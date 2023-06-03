"use client";

import StarterKit from "@tiptap/starter-kit";

import { useEditor, EditorContent, JSONContent } from "@tiptap/react";

interface EditorAreaProps {
  content: JSONContent;
}

export default function EditorArea({ content }: EditorAreaProps) {
  const editor = useEditor(
    {
      extensions: [StarterKit],
      content
    },
    [content]
  );

  return (
    <div>
      <textarea placeholder="Untitled" />
      <EditorContent editor={editor} />
    </div>
  );
}
