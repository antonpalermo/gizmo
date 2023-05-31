import { Metadata } from "next";

import { prisma } from "@gizmo/libs/prisma";

import Headline from "@gizmo/components/headline";
import DashboardShell from "@gizmo/components/shell";
import CreateBlogButton from "@gizmo/components/create-blog-button";

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
        <CreateBlogButton />
      </Headline>
      {blogs.map(blog => (
        <div>{JSON.stringify(blog)}</div>
      ))}
    </DashboardShell>
  );
}
