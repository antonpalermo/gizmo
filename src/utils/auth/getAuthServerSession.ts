import { getServerSession } from "next-auth";
import { GetServerSidePropsContext } from "next";

import options from "@gizmo/utils/auth/options";

const getAuthServerSession = async (
  req: GetServerSidePropsContext["req"],
  res: GetServerSidePropsContext["res"]
) => await getServerSession(req, res, options);

export default getAuthServerSession;
