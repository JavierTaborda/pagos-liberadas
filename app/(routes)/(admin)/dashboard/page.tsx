import { OrganizationList, OrganizationProfile, UserProfile, useOrganizationList, useUser  } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const user = await currentUser();
  const role = user?.publicMetadata?.role as string;

  // Solo admins pueden acceder
  if (role !== "Admin") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">Panel de Administración</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Organizaciones */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4 text-blue-700 flex items-center gap-2">
            <span>🏢</span> Organizaciones
          </h2>
          <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl="/admin/organization/:id"
          />
        </div>

        {/* Usuarios */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4 text-blue-700 flex items-center gap-2">
            <span>👤</span> Perfil de Usuario
          </h2>
          <UserProfile />
        </div>

        {/* Lista de Usuarios */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4 text-blue-700 flex items-center gap-2">
            <span>🧑‍🤝‍🧑</span> Lista de Usuarios
          </h2>
        </div>
      </div>
    </div>
  );
}
