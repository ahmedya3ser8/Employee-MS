import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { useAuthStore } from '@/features/auth/store/authStore';
import ProtectedRoute from './ProtectedRoute';
import DashboardLayout from '@/layouts/DashboardLayout';

import { authRoutes, UnauthorizedPage } from "@/features/auth";
import { AdminDashboard, EmployeeDashboard } from '@/features/dashboard';
import { Employee, EmployeeForm } from '@/features/employee';
import { AdminLeave, EmployeeLeave } from '@/features/leave';
import { AdminPayslip, EmployeePayslip, PayslipDetails } from '@/features/payslip';
import { Profile } from '@/features/profile';
import { Attendance } from '@/features/attendance';

const router = createBrowserRouter([
  { path: '', element: <Navigate to='auth/login' /> },
  authRoutes,
  {
    path: 'admin',
    element: <ProtectedRoute allowedRoles={['admin']}> <DashboardLayout /> </ProtectedRoute>,
    children: [
      { index: true, element: <Navigate to='dashboard' replace /> },
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'employees', element: <Employee /> },
      { path: 'employees/add', element: <EmployeeForm /> },
      { path: 'employees/edit/:id', element: <EmployeeForm /> },
      { path: 'leave', element: <AdminLeave /> },
      { path: 'payslips', element: <AdminPayslip /> },
      { path: 'payslips/print/:id', element: <PayslipDetails /> },
      { path: 'profile', element: <Profile /> },
    ]
  },
  {
    path: 'employee',
    element: <ProtectedRoute allowedRoles={['employee']}> <DashboardLayout /> </ProtectedRoute>,
    children: [
      { index: true, element: <Navigate to='dashboard' replace /> },
      { path: 'dashboard', element: <EmployeeDashboard /> },
      { path: 'attendance', element: <Attendance /> },
      { path: 'leave', element: <EmployeeLeave /> },
      { path: 'payslips', element: <EmployeePayslip /> },
      { path: 'payslips/print/:id', element: <PayslipDetails /> },
      { path: 'profile', element: <Profile /> },
    ]
  },
  { path: 'unauthorized', element: <UnauthorizedPage /> }
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
