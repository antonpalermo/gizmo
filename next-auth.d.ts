import { DefaultSession, User } from "next-auth";

type UserId = string;
type Role = "user" | "admin";

declare module "next-auth/jwt" {
  interface JWT {
    id?: UserId;
    role?: Role;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id?: UserId;
      role?: Role;
    } & DefaultSession["user"];
  }
}
