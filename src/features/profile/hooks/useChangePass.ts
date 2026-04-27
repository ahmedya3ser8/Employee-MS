import { useAuthStore } from "@/features/auth";
import { useForm, type SubmitHandler } from "react-hook-form";
import { passwordSchema, type PasswordFormValues } from "../validations/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import type { ChangePassProps } from "../types/profile.types";

const useChangePass = ({ setShowModal }: ChangePassProps) => {
  const { changePassword, isChangePassword } = useAuthStore();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onTouched',
    resolver: zodResolver(passwordSchema)
  })

  const submitForm: SubmitHandler<PasswordFormValues> = async (data) => {
    const res = await changePassword(data);
    toast.success(res.message);
    setShowModal(false);
  }

  return {
    isChangePassword,
    register,
    handleSubmit,
    errors,
    submitForm
  }
}

export default useChangePass;
