import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthAdminPage, AuthEmployeePage, LoginPage } from "@/features/auth";
import { AuthLayout } from "@/layouts";

const router = createBrowserRouter([
  {
    path: 'auth/login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: 'admin',
        element: <AuthAdminPage />
      },
      {
        path: 'employee',
        element: <AuthEmployeePage />
      },
    ]
  }
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter;
