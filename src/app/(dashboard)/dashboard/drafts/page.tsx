import Headline from "@gizmo/components/headline";
import DashboardShell from "@gizmo/components/shell";
import { Button } from "@gizmo/components/ui/button";
import { prisma } from "@gizmo/libs/prisma";
import { formatDate } from "@gizmo/libs/utils";
import Link from "next/link";

export default async function DraftsPage() {
  const blogs = await prisma.blog.findMany({
    where: { isPublished: false }
  });

  return (
    <DashboardShell>
      <Headline>
        <div>
          <h1 className="mb-2 text-4xl font-bold">Drafts</h1>
          <p className="text-gray-500">Continue where you left</p>
        </div>
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
