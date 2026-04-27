import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { createEmployeeSchema, updateEmployeeSchema, type EmployeeFormValues } from "../validations/employee.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEmployeeStore } from "../store/employeeStore";
import { useNavigate, useParams } from "react-router-dom";

const useEmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { createEmployee, getEmployee, updateEmployee, employee, loading } = useEmployeeStore();
  
  const isEditMode = Boolean(id);

  const schema = isEditMode ? updateEmployeeSchema : createEmployeeSchema;

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onTouched',
    resolver: zodResolver(schema)
  });

  const submitForm: SubmitHandler<EmployeeFormValues> = async (data) => {
    const res = isEditMode ? await updateEmployee(data, id!) : await createEmployee(data);
    toast.success(res.message);
    navigate('/admin/employees');
  }

  useEffect(() => {
    if (!isEditMode) return;
    getEmployee(id!);
  }, [getEmployee, id, isEditMode]);

  useEffect(() => {
    if (!isEditMode || !employee) return;
    reset({
      firstName: employee?.firstName,
      lastName: employee?.lastName,
      allowances: employee?.allowances,
      basicSalary: employee?.basicSalary,
      bio: employee?.bio,
      deductions: employee?.deductions,
      department: employee?.department,
      email: employee?.user.email,
      phoneNumber: employee?.phoneNumber,
      position: employee?.position,
      role: employee?.user.role
    })
  }, [employee, isEditMode, reset]);

  return {
    loading,
    register,
    handleSubmit,
    errors,
    submitForm,
    isEditMode
  }
}

export default useEmployeeForm;
