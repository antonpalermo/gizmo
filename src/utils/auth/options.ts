import { NextAuthOptions } from "next-auth";

import { prisma } from "@gizmo/utils/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import GoogleProviders from "next-auth/providers/google";

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
    })
  ],
  callbacks: {
    async session({ token, session }) {
      if (session.user) {
        session.user.id = token.id;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  }
};

export default options;
