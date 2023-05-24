import { prisma } from "@gizmo/utils/prisma";

export default async function DraftsPage() {
  const blogs = await prisma.blogs.findMany();

  return (
    <div>
      {blogs.map(blog => (
        <h1 key={blog.id}>{blog.title}</h1>
      ))}
    </div>
  );
}
