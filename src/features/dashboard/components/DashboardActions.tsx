import { Link } from "react-router-dom";

import { LuArrowRight } from "react-icons/lu";

const DashboardActions = () => {
  return (
    <div className="flex gap-3 items-center">
      <Link to='/employee/attendance' className="bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4] flex items-center gap-2">
        Mark Attendance
        <LuArrowRight />
      </Link>
      <Link to='/employee/leave' className="text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
        Apply for Leave
      </Link>
    </div>
  )
}

export default DashboardActions;
