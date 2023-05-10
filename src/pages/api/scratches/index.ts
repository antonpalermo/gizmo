import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@gizmo/utils/prisma";
import getAuthServerSession from "@gizmo/utils/auth/getAuthServerSession";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getAuthServerSession(req, res);

  console.log(session);

  try {
    switch (req.method) {
      case "POST":
        const { header } = req.body;
        const createdScratch = await prisma.scratch.create({
          data: { header, owner: session?.user?.email as string }
        });
        return res.status(201).json(createdScratch);

      case "GET":
        const findAllScratches = await prisma.scratch.findMany({
          where: { owner: session?.user?.email! }
        });
        return res.status(200).json(findAllScratches);
      default:
        return res.status(405).end();
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // TODO: Log error here.
      console.log(e);
    }
    res.status(500).end();
  }
}
