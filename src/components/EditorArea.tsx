import { EditorContent, useEditor } from "@tiptap/react";

import { useEffect } from "react";

import StarterKit from "@tiptap/starter-kit";

export interface EditorAreaProps {
  isEditable: boolean;
}

export default function EditorArea({ isEditable }: EditorAreaProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    editable: isEditable
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditable]);

  return <EditorContent editor={editor} />;
}
