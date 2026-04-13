import { Outlet } from "react-router-dom";

import { Sidebar } from "@/shared";

const AdminLayout = () => {
  return (
    <section className="flex h-screen">
      <Sidebar />
      <main className="flex-1 px-8 pt-10 pb-12 overflow-y-auto">
        <Outlet />
      </main>
    </section>
  )
}

export default AdminLayout;
