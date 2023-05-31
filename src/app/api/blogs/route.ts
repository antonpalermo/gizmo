import { prisma } from "@gizmo/libs/prisma";
import { Prisma } from "@prisma/client";
import { error } from "console";

export async function POST(req: Request) {
  try {
    const blog = await prisma.blog.create({
      data: { content: { create: {} } },
      select: { id: true }
    });

    return new Response(JSON.stringify(blog), { status: 201 });
  } catch (e) {
    console.log(e);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.message);
      return new Response(null, { status: 500 });
    }
  }
}
