import { Link } from "react-router-dom";

import { LuPencil, LuTrash } from "react-icons/lu";
import type { IEmployee } from "../models/employee";

type Props = {
  handleDeleteEmployee: (employee: string) => void;
  employee: IEmployee
}

const EmployeeCard = ({ employee, handleDeleteEmployee }: Props) => {
  return (
    <div className="border border-[#E2E8F0B2] rounded-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-md">
      <div className="bg-linear-to-r from-[#F1F5F9] to-[#F8FAFC] aspect-4/3 w-full flex flex-col justify-center items-center relative">
        <span className="bg-white text-slate-600 font-semibold text-xs rounded-md shadow-sm px-2.5 py-1 absolute top-4 left-4">
          {employee.department}
        </span>
        <div className="size-20 bg-linear-to-r from-[#E0E7FF] to-[#F1F5F9] rounded-full capitalize text-[#7C86FF] font-medium text-2xl flex justify-center items-center">
          {employee.firstName[0]} {employee.lastName[0]}
        </div>
      </div>
      <div className="p-5 flex justify-between items-center">
        <div>
          <h3 className="text-[#0F172B] capitalize"> {employee.firstName} {employee.lastName} </h3>
          <p className="text-xs text-[#62748E]"> {employee.position} </p>
        </div>
        <div className="flex gap-2 text-[#0F172B]">
          <Link to={`/admin/employees/edit/${employee._id}`} className="p-2 rounded-md bg-linear-to-r from-[#E0E7FF] to-[#F1F5F9] transition-all duration-300 hover:text-indigo-600 cursor-pointer">
            <LuPencil />
          </Link>
          <button onClick={() => handleDeleteEmployee(employee._id)} className="p-2 rounded-md bg-linear-to-r from-[#E0E7FF] to-[#F1F5F9] transition-all duration-300 hover:text-rose-600 cursor-pointer">
            <LuTrash />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard;
