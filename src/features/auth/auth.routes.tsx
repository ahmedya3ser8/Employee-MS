import GuestRoute from "@/routes/GuestRoute";

import LoginPage from "./pages/LoginPage";
import PortalPage from "./pages/PortalPage";
import AuthLayout from "@/layouts/AuthLayout";

export const authRoutes = {
  path: 'auth',
  element: <GuestRoute> <AuthLayout /> </GuestRoute>,
  children: [
    {
      path: 'login',
      children: [
        {
          index: true,
          element: <PortalPage />
        },
        {
          path: ':role',
          element: <LoginPage />
        }
      ]
    }
  ]
}
