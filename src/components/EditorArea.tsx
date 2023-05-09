import { EditorContent, JSONContent, useEditor } from "@tiptap/react";

import { useEffect } from "react";

import StarterKit from "@tiptap/starter-kit";

export interface EditorAreaProps {
  content: JSONContent;
  isEditable: boolean;
}

export default function EditorArea({ content, isEditable }: EditorAreaProps) {
  const editor = useEditor(
    {
      extensions: [StarterKit],
      editable: isEditable,
      editorProps: {
        attributes: {
          class: "h-full focus:outline-none"
        }
      },
      content
    },
    [content]
  );

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditable]);

  return <EditorContent className="h-full" editor={editor} />;
}
