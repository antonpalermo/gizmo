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
  interface User {
    role?: Role;
  }

  interface Session {
    user: {
      id?: UserId;
    } & DefaultSession["user"];
  }
}
