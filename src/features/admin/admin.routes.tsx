import { Navigate } from "react-router-dom";

import { AdminLayout } from "@/layouts";
import ProtectedRoute from "@/routes/ProtectedRoute";

import AdminAddEmployeePage from "./pages/AdminAddEmployeePage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminEditEmployeePage from "./pages/AdminEditEmployeePage";
import AdminEmployeesPage from "./pages/AdminEmployeesPage";
import AdminLeavePage from "./pages/AdminLeavePage";
import AdminPayslipsPage from "./pages/AdminPayslipsPage";
import AdminSettingsPage from "./pages/AdminSettingsPage";

export const adminRoutes = {
  path: 'admin',
  element: <ProtectedRoute allowedRoles={['admin']}> <AdminLayout /> </ProtectedRoute>,
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
      path: 'settings',
      element: <AdminSettingsPage />
    },
  ]
}
