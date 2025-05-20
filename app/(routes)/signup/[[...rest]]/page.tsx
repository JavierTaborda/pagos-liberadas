import { SignIn, SignUp } from "@clerk/nextjs";

import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
      <div className="w-full max-w-md p-6 flex flex-col items-center justify-center">
        <SignUp />
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>¿Tienes una cuenta?  
            <Link href="/signin" className="text-accent hover:underline">
              Inicia Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
