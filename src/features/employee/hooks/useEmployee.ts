import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useEmployeeStore } from "../store/employeeStore";

const useEmployee = () => {
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

  const handleDepartment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getEmployees(undefined, e.target.value);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    employeeList,
    loading,
    handleDeleteEmployee,
    handleSearch,
    handleDepartment
  }
}

export default useEmployee;
