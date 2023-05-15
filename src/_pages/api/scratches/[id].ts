import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@gizmo/utils/prisma";

interface IncomingAPIRequest extends Omit<NextApiRequest, "query"> {
  query: { id: string };
}

export default async function handler(
  req: IncomingAPIRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  try {
    const scratch = await prisma.scratch.findUnique({ where: { id } });
    if (!scratch) {
      return res
        .status(404)
        .json({ error: "The requested resource is not available!" });
    }

    return res.status(200).json(scratch);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // TODO: Log error here.
      console.log(e);
    }
    res.status(500).end();
  }
}
