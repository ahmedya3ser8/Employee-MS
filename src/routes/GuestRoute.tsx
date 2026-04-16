import { useAuthStore } from "@/features/auth/store/authStore";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode
};

const GuestRoute = ({ children }: Props) => {
  const { isAuthenticated, role } = useAuthStore();
  
  if (isAuthenticated) {
    return <Navigate to={role === 'admin' ? '/admin' : '/employee'} replace />;
  }

  return children;
}

export default GuestRoute;
