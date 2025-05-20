import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Pay() {
  
  const user = await currentUser();


  if (!user) {
    redirect("/sign-in"); // Ajusta la ruta de login según tu app
  }

  
  const role = user.publicMetadata?.role as string | undefined;


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Pay</h1>
      <p className="text-lg">
        Rol del usuario:{" "}
        <span className="font-mono bg-gray-100 px-2 py-1 rounded">
          {role || "No asignado"}
        </span>
      </p>

    </div>
  );
}
