import { NextAuthOptions } from "next-auth";

import { prisma } from "@gizmo/libs/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import GoogleProviders from "next-auth/providers/google";
import GithubProviders from "next-auth/providers/github";

const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GithubProviders({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ token, session }) {
      if (session.user) {
        session.user = token;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    }
  }
};

export default options;
