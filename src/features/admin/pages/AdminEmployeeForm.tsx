import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Input, Select, Textarea } from "@/shared";
import { useEffect } from "react";
import { LuLoader } from "react-icons/lu";
import { useEmployeeStore } from "../store/employeeStore";
import { createEmployeeSchema, DEPARTMENTS, updateEmployeeSchema, type EmployeeFormValues } from "../validations/employee.schema";

const AdminEmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { createEmployee, getEmployee, updateEmployee, employee, loading } = useEmployeeStore();
  
  const isEditMode = Boolean(id);

  const schema = isEditMode ? updateEmployeeSchema : createEmployeeSchema;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<EmployeeFormValues>({
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

  return (
    <section className="space-y-8">

      <div className="space-y-1">

        <h1 className="text-2xl font-medium text-[#0F172B]">
          {isEditMode ? 'Edit Employee' : 'Add New Employee'}
        </h1>

        <p className="text-sm text-[#62748E]"> 
          {isEditMode ? 'Update employee details' : 'Create a user account and employee profile'}
        </p>

      </div>

      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-8">

        <div className="card border border-slate-200 rounded-md p-6">
          <h2 className="font-medium border-b border-slate-100 pb-6"> Personal Information </h2>
          <div className="flex flex-col gap-6 pt-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <Input 
                id="firstName"
                label="First Name"
                placeholder="john"
                register={register}
                name="firstName"
                error={errors.firstName?.message as string}
              />

              <Input 
                id="lastName"
                label="Last Name"
                placeholder="Doe"
                register={register}
                name="lastName"
                error={errors.lastName?.message as string}
              />

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
  
              <Input 
                id="phoneNumber"
                label="Phone Number"
                placeholder="01023456789"
                register={register}
                name="phoneNumber"
                error={errors.phoneNumber?.message as string}
              />

            </div>

            <Textarea 
              id="bio"
              label="Bio (Optional)"
              register={register}
              name="bio"
              placeholder="Brief description..."
              error={errors.bio?.message as string}
            />

          </div>
        </div>

        <div className="card border border-slate-200 rounded-md p-6">
          <h2 className="font-medium border-b border-slate-100 pb-6"> Employment Details </h2>
          <div className="flex flex-col gap-6 pt-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <Select 
                id="department"
                label="Department"
                register={register}
                name="department"
                error={errors.department?.message as string}
                options={DEPARTMENTS}
                optionTitle="Select Department"
              />

              <Input 
                id="position"
                label="Position"
                placeholder="Marketing"
                register={register}
                name="position"
                error={errors.position?.message as string}
              />

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <Input 
                id="basicSalary"
                label="Basic Salary"
                type="number"
                placeholder="5000"
                register={register}
                name="basicSalary"
                error={errors.basicSalary?.message as string}
              />

              <Input 
                id="allowances"
                label="Allowances"
                type="number"
                placeholder="0"
                register={register}
                name="allowances"
                error={errors.allowances?.message as string}
              />

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <Input 
                id="deductions"
                label="Deductions"
                type="number"
                placeholder="0"
                register={register}
                name="deductions"
                error={errors.deductions?.message as string}
              />

            </div>

          </div>
        </div>

        <div className="card border border-slate-200 rounded-md p-6">
          <h2 className="font-medium border-b border-slate-100 pb-6"> Account Setup </h2>
          <div className="flex flex-col gap-6 pt-6">

            <Input 
              id="email"
              label="Work Email"
              type="email"
              placeholder="john@gmail.com"
              register={register}
              name="email"
              error={errors.email?.message as string}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              
              {!isEditMode && (
                <Input 
                  id="password"
                  type="password"
                  label="Temporary Password"
                  placeholder="******"
                  register={register}
                  name='password'
                  error={errors.password?.message as string}
                />
              )}

              <Select 
                id="role"
                label="System Role"
                register={register}
                name="role"
                error={errors.role?.message as string}
                options={['employee', 'admin']}
              />

            </div>

          </div>
        </div>

        <div className="flex gap-3 items-center justify-end">
          <Link to='/admin/employees' className="text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
            Cancel
          </Link>
          <button type="submit" className="bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
            {loading ? <LuLoader size={22} className='animate-spin mx-auto' /> : isEditMode ? 'Update Employee' : 'Create Employee'}
          </button>
        </div>

      </form>

    </section>
  )
}

export default AdminEmployeeForm;
