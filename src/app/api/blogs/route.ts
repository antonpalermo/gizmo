import { Prisma } from "@prisma/client";
import { prisma } from "@gizmo/libs/prisma";

import getCurrentUser from "@gizmo/libs/auth/getCurrentUser";

export async function POST(req: Request) {
  const user = await getCurrentUser();

  if (!user) {
    return new Response(null, { status: 401 });
  }

  try {
    const blog = await prisma.blog.create({
      data: {
        content: { create: {} },
        owner: { connect: { email: user.email! } }
      }
    });

    return new Response(JSON.stringify(blog), { status: 201 });
  } catch (e) {
    console.log(e);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(e.message);
      return new Response(null, { status: 500 });
    }
  }
}
