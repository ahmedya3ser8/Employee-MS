import { LuLoader } from "react-icons/lu";
import { Link } from "react-router-dom";
import type { EmployeeFormActionsProps } from "../types/employee.types";

const EmployeeFormActions = ({ isEditMode, loading }: EmployeeFormActionsProps) => {
  return (
    <div className="flex gap-3 items-center justify-end">
      <Link to='/admin/employees' className="text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
        Cancel
      </Link>
      <button type="submit" className="bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
        {loading ? <LuLoader size={22} className='animate-spin mx-auto' /> : isEditMode ? 'Update Employee' : 'Create Employee'}
      </button>
    </div>
  )
}

export default EmployeeFormActions;
