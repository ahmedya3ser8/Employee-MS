import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { adminRoutes } from "@/features/admin";
import { employeeRoutes } from '@/features/employee';
import { authRoutes, UnauthorizedPage } from "@/features/auth";
import { useAuthStore } from '@/features/auth/store/authStore';

const router = createBrowserRouter([
  {
    path: '',
    element: <Navigate to='auth/login' />
  },
  authRoutes,
  adminRoutes,
  employeeRoutes,
  {
    path: 'unauthorized',
    element: <UnauthorizedPage />
  }
]);

const AppRouter = () => {
  const { getMe, initialized } = useAuthStore();
  useEffect(() => {
    getMe();
  }, [getMe]);

  if (!initialized) return <div className="fixed inset-0 bg-gray-50 flex justify-center items-center">
    <span className="loader"></span>
  </div>

  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  )
}

export default AppRouter;
