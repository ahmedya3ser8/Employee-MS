import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

const EmployeeHeader = () => {
  return (
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
  )
}

export default EmployeeHeader;
