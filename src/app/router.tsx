import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { 
  AdminAddEmployeePage, 
  AdminAddPayslipsPage, 
  AdminDashboardPage, 
  AdminEditEmployeePage, 
  AdminEmployeesPage, 
  AdminLeavePage, 
  AdminPayslipsPage, 
  AdminSettingsPage 
} from "@/features/admin";
import { 
  EmployeeAttendancePage, 
  EmployeeDashboardPage, 
  EmployeeLeavePage, 
  EmployeePayslipsPage, 
  EmployeeSettingsPage 
} from "@/features/employee";
import { AuthAdminPage, AuthEmployeePage, LoginPage } from "@/features/auth";
import { AuthLayout, AdminLayout, EmployeeLayout } from "@/layouts";

const router = createBrowserRouter([
  {
    path: '',
    element: <Navigate to='auth/login' replace />
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='dashboard' replace />
      },
      {
        path: 'dashboard',
        element: <AdminDashboardPage />
      },
      {
        path: 'employees',
        element: <AdminEmployeesPage />
      },
      {
        path: 'employees/add',
        element: <AdminAddEmployeePage />
      },
      {
        path: 'employees/edit/:id',
        element: <AdminEditEmployeePage />
      },
      {
        path: 'leave',
        element: <AdminLeavePage />
      },
      {
        path: 'payslips',
        element: <AdminPayslipsPage />
      },
      {
        path: 'payslips/add',
        element: <AdminAddPayslipsPage />
      },
      {
        path: 'settings',
        element: <AdminSettingsPage />
      },
    ]
  },
  {
    path: 'employee',
    element: <EmployeeLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='dashboard' replace />
      },
      {
        path: 'dashboard',
        element: <EmployeeDashboardPage />
      },
      {
        path: 'attendance',
        element: <EmployeeAttendancePage />
      },
      {
        path: 'leave',
        element: <EmployeeLeavePage />
      },
      {
        path: 'payslips',
        element: <EmployeePayslipsPage />
      },
      {
        path: 'settings',
        element: <EmployeeSettingsPage />
      },
    ]
  },
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
