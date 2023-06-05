import { Metadata } from "next";

import { prisma } from "@gizmo/libs/prisma";

import Headline from "@gizmo/components/headline";
import DashboardShell from "@gizmo/components/shell";
import CreateBlogButton from "@gizmo/components/create-blog-button";
import Link from "next/link";

import { Button } from "@gizmo/components/ui/button";

export const metadata: Metadata = {
  title: "Blogs"
};

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany();

  function formatDate(input: string | number): string {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }

  return (
    <DashboardShell>
      <Headline>
        <div>
          <h1 className="mb-2 text-4xl font-bold">Blogs</h1>
          <p className="text-gray-500">Collections of blogs</p>
        </div>
        <CreateBlogButton />
      </Headline>
      <div className="my-5 grid grid-cols-2 gap-5">
        {blogs.map(blog => (
          <div
            key={blog.id}
            className="inline-flex items-center justify-between  rounded-md border p-5"
          >
            <div>
              <Link
                href={""}
                className="mb-2 block text-2xl font-bold hover:underline"
              >
                {blog.title}
              </Link>
              <p className="text-sm font-medium leading-none text-gray-500">
                {formatDate(blog.createdAt.toDateString())}
              </p>
            </div>
            <Button variant="ghost">Edit</Button>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
