import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Blog Post"
};

import { prisma } from "@gizmo/libs/prisma";
import EditorArea from "@gizmo/components/editor-area";
import { JSONContent } from "@tiptap/react";
import { notFound } from "next/navigation";

interface ContentEditorProps {
  params: { contentId: string };
}

export default async function ContentEditor({ params }: ContentEditorProps) {
  const blog = await prisma.blog.findUnique({
    where: { id: params.contentId },
    include: { content: true }
  });

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <EditorArea content={blog?.content.raw as JSONContent} />
    </div>
  );
}
