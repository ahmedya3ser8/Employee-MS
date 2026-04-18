import { Navigate } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";

import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminEmployeeForm from "./pages/AdminEmployeeForm";
import AdminEmployeesPage from "./pages/AdminEmployeesPage";
import AdminLeavePage from "./pages/AdminLeavePage";
import AdminPayslipsPage from "./pages/AdminPayslipsPage";
import AdminSettingsPage from "./pages/AdminSettingsPage";

export const adminRoutes = {
  path: 'admin',
  element: <ProtectedRoute allowedRoles={['admin']}> <DashboardLayout /> </ProtectedRoute>,
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
      element: <AdminEmployeeForm />
    },
    {
      path: 'employees/edit/:id',
      element: <AdminEmployeeForm />
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
      path: 'settings',
      element: <AdminSettingsPage />
    },
  ]
}
