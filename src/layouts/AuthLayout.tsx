import { Outlet } from "react-router-dom";

import { AuthInfo } from "@/shared";

const AuthLayout = () => {
  return (
    <section className="flex h-screen">
      <AuthInfo />
      <main className="w-full lg:w-1/2">
        <Outlet />
      </main>
    </section>
  )
}

export default AuthLayout;
