import Draft from "@gizmo/components/draft";
import Headline from "@gizmo/components/headline";
import DashboardShell from "@gizmo/components/shell";
import getCurrentUser from "@gizmo/libs/auth/getCurrentUser";

import { prisma } from "@gizmo/libs/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drafts"
};

export default async function DraftsPage() {
  const user = await getCurrentUser();

  const blogs = await prisma.blog.findMany({
    where: { owner: { email: user?.email }, AND: { isPublished: false } }
  });

  return (
    <DashboardShell>
      <Headline>
        <div>
          <h1 className="mb-2 text-4xl font-bold">Drafts</h1>
          <p className="text-gray-500">continue where we left off</p>
        </div>
      </Headline>
      <div className="my-10 grid grid-cols-1 gap-3">
        {blogs.map(blog => (
          <Draft key={blog.id} blog={blog} />
        ))}
      </div>
    </DashboardShell>
  );
}
