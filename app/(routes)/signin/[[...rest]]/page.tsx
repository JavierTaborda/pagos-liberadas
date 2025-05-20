import { SignIn } from "@clerk/nextjs";

import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
      <div className="w-full max-w-md p-6 flex flex-col items-center justify-center">
        <SignIn />
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>¿Primera vez?  
            <Link href="/signup" className="text-accent hover:underline">
              Crea una cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
