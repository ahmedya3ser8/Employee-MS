import { LuSearch } from "react-icons/lu";
import { DEPARTMENTS } from "../types/employee.types";

type EmployeeFiltersProps = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDepartment: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const EmployeeFilters = ({ handleDepartment, handleSearch }: EmployeeFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-3">

      <div className="text-[#90A1B9] bg-[#f8fafc80] border border-[#E2E8F0] rounded-md py-3 pl-10 pr-4 flex-1 relative">
        <LuSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2" />
        <input onChange={handleSearch} type="search" className="w-full outline-none" placeholder="Search employees..." />
      </div>

      <select onChange={handleDepartment} className="w-50 bg-[#f8fafc80] border border-[#E2E8F0] rounded-md outline-none p-3">
        <option value=""> All Departments </option>
        {DEPARTMENTS.map((department, index) => (
          <option key={index} value={department}> {department} </option>
        ))}
      </select>

    </div>
  )
}

export default EmployeeFilters;
