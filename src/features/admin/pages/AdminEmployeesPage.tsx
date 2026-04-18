import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import { LuPlus, LuSearch } from "react-icons/lu";
import EmployeeCard from "../components/EmployeeCard";
import { useEmployeeStore } from "../store/employeeStore";
import { DEPARTMENTS } from "../validations/employee.schema";

const AdminEmployeesPage = () => {
  const { employeeList, loading, getEmployees, deleteEmployee } = useEmployeeStore();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  const handleDeleteEmployee = async (employeeId: string) => {
    const employee = await deleteEmployee(employeeId);
    toast.success(employee.message);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      getEmployees(value);
    }, 400)
  }

  const handleChangeDepartment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getEmployees(undefined, e.target.value);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="space-y-8">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div className="space-y-1">
          <h1 className="text-2xl font-medium text-[#0F172B]"> Employees </h1>
          <p className="text-sm text-[#62748E]"> Manage your team members </p>
        </div>

        <Link to='/admin/employees/add' className="max-md:w-50 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white flex items-center gap-2 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
          <LuPlus size={16} />
          Add Employee
        </Link>

      </div>

      <div className="flex flex-col md:flex-row gap-3">

        <div className="text-[#90A1B9] bg-[#f8fafc80] border border-[#E2E8F0] rounded-md py-3 pl-10 pr-4 flex-1 relative">
          <LuSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2" />
          <input onChange={handleSearch} type="search" className="w-full outline-none" placeholder="Search employees..." />
        </div>

        <select onChange={handleChangeDepartment} className="w-50 bg-[#f8fafc80] border border-[#E2E8F0] rounded-md outline-none p-3">
          <option value=""> All Departments </option>
          {DEPARTMENTS.map((department, index) => (
            <option key={index} value={department}> {department} </option>
          ))}
        </select>

      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <span className="loader"></span>
        </div>
      )
      : (
        employeeList.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {employeeList.map((employee) => (
              <EmployeeCard 
                key={employee._id} 
                employee={employee} 
                handleDeleteEmployee={handleDeleteEmployee} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center mt-5 text-slate-500">
            No employees found
          </div>
        )
      )}


    </section>
  )
}

export default AdminEmployeesPage;
