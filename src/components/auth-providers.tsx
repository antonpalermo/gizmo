"use client";

import * as React from "react";

import Image from "next/image";
import { signIn } from "next-auth/react";

function Provider({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${className} inline-flex w-full items-center justify-center rounded-md bg-slate-300 py-3 text-sm font-medium text-gray-900`}
      {...props}
    />
  );
}

export default function AuthProviders() {
  return (
    <div className="space-y-2">
      {/* TODO: update /dashboard the return url of the page. */}
      <Provider onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
        <Image
          src="/google.svg"
          className="mr-3"
          width={16}
          height={16}
          alt="google logo"
        />{" "}
        Sign in with Google
      </Provider>
      <Provider>
        <Image
          src="/github.svg"
          className="mr-3"
          width={16}
          height={16}
          alt="google logo"
        />{" "}
        Sign in with Github
      </Provider>
    </div>
  );
}
