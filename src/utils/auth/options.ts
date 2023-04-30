import { NextAuthOptions } from "next-auth";

import GoogleProviders from "next-auth/providers/google";

const options: NextAuthOptions = {
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ]
};

export default options;
