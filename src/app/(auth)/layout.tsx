import Image from "next/image";
import * as React from "react";

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="bg-muted relative hidden h-full lg:block">
          <Image
            fill
            src="/login-bg.jpg"
            style={{ objectFit: "cover" }}
            alt="technical"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
