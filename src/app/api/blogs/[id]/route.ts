import getCurrentUser from "@gizmo/libs/auth/getCurrentUser";
import { Prisma } from "@prisma/client";
import * as z from "zod";

const routeContextSchema = z.object({
  params: z.object({
    id: z.string()
  })
});

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  const user = await getCurrentUser();

  if (!user) {
    return new Response(null, { status: 401 });
  }

  try {
    const { params } = routeContextSchema.parse(context);
    const isOwner = await prisma?.blog.findUnique({
      where: { id: params.id },
      include: { owner: { select: { email: true } } }
    });

    if (isOwner?.owner.email === user.email) {
      await prisma?.blog.delete({ where: { id: params.id } });
    } else {
      return new Response(
        JSON.stringify({ message: "You can't delete other's post." }),
        { status: 401 }
      );
    }

    return new Response(null, { status: 204 });
  } catch (e) {
    console.log(e);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(e.message);
      return new Response(null, { status: 500 });
    }
  }
}
