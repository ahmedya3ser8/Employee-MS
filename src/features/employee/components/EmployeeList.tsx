import type { IEmployee } from "../types/employee.types";
import EmployeeCard from "./EmployeeCard";

type EmployeeListProps = {
  employeeList: IEmployee[];
  handleDeleteEmployee: (employeeId: string) => Promise<void>;
  loading: boolean;
}

const EmployeeList = ({ employeeList, handleDeleteEmployee, loading }: EmployeeListProps) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <span className="loader"></span>
      </div>
    );
  }

  if (employeeList.length === 0) {
    return (
      <div className="text-center mt-5 text-slate-500">
        No employees found
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      {employeeList.map((employee) => (
        <EmployeeCard 
          key={employee._id} 
          employee={employee} 
          handleDeleteEmployee={handleDeleteEmployee} 
        />
      ))}
    </div>
  )
}

export default EmployeeList;
