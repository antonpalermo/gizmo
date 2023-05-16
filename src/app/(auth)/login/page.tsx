import AuthForm from "@gizmo/components/auth-form";
import AuthProviders from "@gizmo/components/auth-providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizmo - Sign in",
  description: "Sign in to access your Gizmo account!"
};

export default function LoginPage() {
  return (
    <div className="mx-auto w-2/3 lg:p-8">
      <div className="mb-4">
        <h1 className="mb-3 text-3xl font-bold text-gray-800">Sign in</h1>
        <p className="text-sm leading-snug text-gray-500">
          We are happy to have you back! Sign in to access contents and learning
          materials design for you.
        </p>
      </div>
      <AuthForm />
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="text-muted-foreground bg-white px-2">
            Or continue with
          </span>
        </div>
      </div>
      <AuthProviders />
    </div>
  );
}
