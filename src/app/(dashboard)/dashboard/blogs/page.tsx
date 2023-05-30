import { Metadata } from "next";

import Headline from "@gizmo/components/headline";
import DashboardShell from "@gizmo/components/shell";

import { prisma } from "@gizmo/libs/prisma";

export const metadata: Metadata = {
  title: "Blogs"
};

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany();

  return (
    <DashboardShell>
      <Headline>
        <div>
          <h1 className="mb-2 text-4xl font-bold">Blogs</h1>
          <p className="text-gray-500">Collections of blogs</p>
        </div>
        <button className="rounded border border-gray-100 bg-white px-3 py-2">
          New Blog Post
        </button>
      </Headline>
      {blogs.map(blog => (
        <div>{JSON.stringify(blog)}</div>
      ))}
    </DashboardShell>
  );
}
