import { Outlet } from "react-router";
import { Sidebar } from "@/app/components/Sidebar";
import { Header } from "@/app/components/Header";

export function Layout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
