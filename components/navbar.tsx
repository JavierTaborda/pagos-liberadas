"use client";
import {
  LogIn,
  UserPlus,
} from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex  items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={() => router.push("/")}>
        <img
          src="/Q.png"
          alt="Logo"
          className="h-10 w-auto inline-block mr-2 rounded"
        />
      </h1>

      <SignedOut>
        <div className="flex items-center justify-between gap-2 sm:gap">
          <SignInButton mode="modal">
            <Button variant="outline">
              <LogIn strokeWidth={1} className="curser-pointer" />
              Iniciar Sesión
            </Button>
          </SignInButton>
        </div>

        <div className="flex items-center justify-between gap-2 sm:gap">
          <SignUpButton mode="modal">
            <Button variant="outline">
              <UserPlus strokeWidth={1} className="curser-pointer" />
              Registrate
            </Button>
          </SignUpButton>
        </div>
      </SignedOut>

      {/* Its authenticated */}
      <SignedIn>
        <div className="flex items-center justify-between gap-2 sm:gap">
          <div className="items-center justify-between hidden  sm:flex">
            <MenuList />
          </div>
          <div className="flex sm:hidden">
            <ItemsMenuMobile />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap">
          <UserButton />
        </div>
      </SignedIn>

      <ToggleTheme />
    </div>
  );
};
export default Navbar;
