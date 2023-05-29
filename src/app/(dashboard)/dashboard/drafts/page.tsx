import { prisma } from "@gizmo/libs/prisma";

export default async function DraftsPage() {
  const blogs = await prisma.blog.findMany();

  return (
    <div>
      {blogs.map(blog => (
        <h1 key={blog.id}>{blog.title}</h1>
      ))}
    </div>
  );
}
