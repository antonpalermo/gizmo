import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "@gizmo/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...props }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...props} />
    </SessionProvider>
  );
}
