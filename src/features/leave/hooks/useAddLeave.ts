import { useForm, type SubmitHandler } from "react-hook-form";
import { useLeaveStore } from "../store/leaveStore";
import { leaveSchema, type LeaveFormValues } from "../validations/leave.schema";
import { zodResolver } from "@hookform/resolvers/zod";

type AddLeaveProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const useAddLeave = ({ setShowModal }: AddLeaveProps) => {
  const { createLeave, getLeaveStats, isCreateLeaveLoading } = useLeaveStore();
  
  const { register, handleSubmit, formState: { errors } } = useForm<LeaveFormValues>({
    mode: 'onTouched',
    resolver: zodResolver(leaveSchema)
  });

  const submitForm: SubmitHandler<LeaveFormValues> = async (data) => {
    await createLeave(data);
    setShowModal(false);
    getLeaveStats();
  }

  return {
    isCreateLeaveLoading,
    register,
    handleSubmit,
    errors,
    submitForm
  }
}

export default useAddLeave;
