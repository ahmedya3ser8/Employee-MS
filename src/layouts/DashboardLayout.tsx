import { Outlet } from "react-router-dom";

import { Sidebar } from "@/components";

const DashboardLayout = () => {
  return (
    <section className="flex h-screen">
      <Sidebar />
      <main className="flex-1 px-6 md:px-8 py-14 overflow-y-auto">
        <Outlet />
      </main>
    </section>
  )
}

export default DashboardLayout;
