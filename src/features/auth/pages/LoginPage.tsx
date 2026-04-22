import type { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

import type { LoginFormValues } from "@/features/auth/validations/auth.schema";
import LoginForm from "../components/LoginForm";
import LoginHeader from "../components/LoginHeader";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const navigate = useNavigate();
  const { role } = useParams();
  const { login, loading } = useAuthStore();

  const submitForm: SubmitHandler<LoginFormValues> = async (data) => {   
    if (loading) return;

    const res = await login(data);
    
    if (res.data.user.role !== role) {
      toast.error('Not allowed for this portal');
      return;
    }

    toast.success(res.message);

    navigate(
      res.data.user.role === 'admin' 
      ? '/admin/dashboard' 
      : '/employee/dashboard'
    );
  }

  return (
    <div className="flex flex-col gap-10 justify-center h-full w-full max-w-md mx-auto max-sm:p-6">

      <LoginHeader 
        title={role === 'admin' ? 'Admin Portal' : 'Employee Portal'}
        description="Sign in to access your account"
      />

      <LoginForm submitForm={submitForm} loading={loading} /> 

    </div>
  )
}

export default LoginPage;
