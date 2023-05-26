import { getServerSession } from "next-auth/next";

import options from "@gizmo/libs/auth/options";

export default async function getCurrentUser() {
  const session = await getServerSession(options);
  return session?.user;
}
