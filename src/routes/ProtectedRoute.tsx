import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/features/auth/store/authStore";

type Props = {
  allowedRoles?: Array<"admin" | "employee">;
  children: React.ReactNode
};

const ProtectedRoute = ({ allowedRoles, children }: Props) => {
  const { isAuthenticated, role } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to='/auth/login' replace />;
  }

  if (allowedRoles && role && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute;
