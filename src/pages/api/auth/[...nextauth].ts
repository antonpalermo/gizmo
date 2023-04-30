import NextAuth from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";

import options from "@gizmo/utils/auth/options";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return await NextAuth(req, res, options);
}
