import { useEmployeeStore } from "@/features/employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { usePayslipStore } from "../store/payslipStore";
import { payslipSchema, type PayslipFormValues } from "../validations/payslip.schema";

type AddPayslipProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const useAddPayslip = ({  setShowModal }: AddPayslipProps) => {
  const { employeeList, getEmployees } = useEmployeeStore();
  const { createPayslip, getPayslips, isCreatePayslipLoading } = usePayslipStore();

  const { register, handleSubmit, formState: { errors } } = useForm<PayslipFormValues>({
    mode: 'onTouched',
    resolver: zodResolver(payslipSchema)
  })

  const submitForm: SubmitHandler<PayslipFormValues> = async (data) => {
    await createPayslip(data);
    setShowModal(false);
    getPayslips();
  }

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  return {
    employeeList,
    isCreatePayslipLoading,
    register,
    handleSubmit,
    errors,
    submitForm
  }
}

export default useAddPayslip;
