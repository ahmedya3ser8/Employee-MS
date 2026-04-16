import { Navigate } from "react-router-dom";

import { EmployeeLayout } from "@/layouts";
import ProtectedRoute from "@/routes/ProtectedRoute";

import EmployeeAttendancePage from "./pages/EmployeeAttendancePage";
import EmployeeDashboardPage from './pages/EmployeeDashboardPage';
import EmployeeLeavePage from "./pages/EmployeeLeavePage";
import EmployeePayslipsPage from "./pages/EmployeePayslipsPage";
import EmployeeSettingsPage from "./pages/EmployeeSettingsPage";

export const employeeRoutes = {
  path: 'employee',
  element: <ProtectedRoute allowedRoles={['employee']}> <EmployeeLayout /> </ProtectedRoute>,
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
}
