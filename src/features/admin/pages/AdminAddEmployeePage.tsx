import { useState } from "react";
import { Link } from "react-router-dom";

import { FiEye, FiEyeOff } from "react-icons/fi";

const DepartmentsList = [
  { id: 1, value: 'all', name: 'All Departments' },
  { id: 2, value: 'engineering', name: 'Engineering' },
  { id: 3, value: 'human-resources', name: 'Human Resources' },
  { id: 4, value: 'marketing', name: 'Marketing' },
  { id: 5, value: 'sales', name: 'Sales' },
  { id: 6, value: 'finance', name: 'Finance' },
  { id: 7, value: 'operations', name: 'Operations' },
  { id: 8, value: 'it-support', name: 'It Support' },
  { id: 9, value: 'product-management', name: 'Product Management' },
  { id: 10, value: 'desgin', name: 'Desgin' },
];

const rolesList = [
  { id: 11, value: 'employee', name: 'Employee' },
  { id: 12, value: 'admin', name: 'Admin' }
];

const AdminAddEmployeePage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="space-y-8">

      <div className="space-y-1">
        <h1 className="text-2xl font-medium text-[#0F172B]"> Add New Employee </h1>
        <p className="text-sm text-[#62748E]"> Create a user account and employee profile </p>
      </div>

      <form className="flex flex-col gap-8">

        <div className="card border border-slate-200 rounded-md p-6">
          <h2 className="font-medium border-b border-slate-100 pb-6"> Personal Information </h2>
          <div className="flex flex-col gap-6 pt-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-[#314158]"> First Name </label>
                <input type="text" id="firstName" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="john" />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-[#314158]"> Last Name </label>
                <input type="text" id="lastName" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="Doe" />
              </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#314158]"> Phone Number </label>
                <input type="tel" id="phoneNumber" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="01023456789" />
              </div>

              <div className="space-y-2">
                <label htmlFor="joinDate" className="block text-sm font-medium text-[#314158]"> Join Date </label>
                <input type="date" id="joinDate" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" />
              </div>

            </div>

            <div className="space-y-2">
              <label htmlFor="bio" className="block text-sm font-medium text-[#314158]"> Bio (Optional) </label>
              <textarea className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" id="bio" placeholder="Brief description..."></textarea>
            </div>

          </div>
        </div>

        <div className="card border border-slate-200 rounded-md p-6">
          <h2 className="font-medium border-b border-slate-100 pb-6"> Employment Details </h2>
          <div className="flex flex-col gap-6 pt-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <div className="space-y-2">
                <label htmlFor="department" className="block text-sm font-medium text-[#314158]"> Department </label>
                <select id="department" className="w-full bg-[#f8fafc80] border border-[#E2E8F0] rounded-md outline-none p-3">
                  {DepartmentsList.map((department) => (
                    <option key={department.id} value={department.value}> {department.name} </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="position" className="block text-sm font-medium text-[#314158]"> Position </label>
                <input type="text" id="position" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="Marketing" />
              </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <div className="space-y-2">
                <label htmlFor="basic-salary" className="block text-sm font-medium text-[#314158]"> Basic Salary </label>
                <input type="number" id="basic-salary" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="0" />
              </div>

              <div className="space-y-2">
                <label htmlFor="allowances" className="block text-sm font-medium text-[#314158]"> Allowances </label>
                <input type="number" id="allowances" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="0" />
              </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <div className="space-y-2">
                <label htmlFor="deductions" className="block text-sm font-medium text-[#314158]"> Deductions </label>
                <input type="number" id="deductions" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="0" />
              </div>

            </div>

          </div>
        </div>

        <div className="card border border-slate-200 rounded-md p-6">
          <h2 className="font-medium border-b border-slate-100 pb-6"> Account Setup </h2>
          <div className="flex flex-col gap-6 pt-6">

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#314158]"> Work Email </label>
              <input type="email" id="email" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="john@gmail.com" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#314158]"> Temporary Password </label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} id="password" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="********" />
                  <button onClick={() => setShowPassword(prev => !prev)} type="button" className="absolute top-1/2 -translate-y-1/2 right-4 text-[#62748E] cursor-pointer"> 
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />} 
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="system-role" className="block text-sm font-medium text-[#314158]"> System Role </label>
                <select id="system-role" className="w-full bg-[#f8fafc80] border border-[#E2E8F0] rounded-md outline-none p-3">
                  {rolesList.map((role) => (
                    <option key={role.id} value={role.value}> {role.name} </option>
                  ))}
                </select>
              </div>

            </div>

          </div>
        </div>

        <div className="flex gap-3 items-center justify-end">
          <Link to='/admin/employees' className="text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
            Cancel
          </Link>
          <button type="submit" className="bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
            Create Employee
          </button>
        </div>

      </form>

    </section>
  )
}

export default AdminAddEmployeePage;
