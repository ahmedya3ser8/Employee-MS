import { Link } from "react-router-dom";

import { FiDollarSign, FiFileText } from "react-icons/fi";
import { LuArrowRight, LuCalendar } from "react-icons/lu";

const dashboardStats = [
  { id: 1, title: 'Days Present', value: 0, Icon: LuCalendar },
  { id: 2, title: 'Pending Leaves', value: 0, Icon: FiFileText },
  { id: 3, title: "Latest Payslip", value: 1000, Icon: FiDollarSign },
];

const EmployeeDashboard = () => {
  return (
    <section className="space-y-8">

      <div className="space-y-1">
        <h1 className="text-2xl font-medium text-[#0F172B]"> Welcome, David! </h1>
        <p className="text-sm text-[#62748E]"> Software Developer - Engineering </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {dashboardStats.map((stat) => (
          <div key={stat.id} className="col border border-[#E2E8F0] rounded-lg p-6 flex items-center justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group">
            <div className="absolute w-1 h-full bg-[#62748EB2] left-0 rounded-tr-2xl rounded-br-2xl transition-all duration-500 group-hover:bg-indigo-500/70"></div>
            <div className="space-y-1">
              <h4 className="text-sm text-[#314158] font-medium"> {stat.title} </h4>
              <span className="text-2xl font-bold text-[#0F172B]"> {stat.value} </span>
            </div>
            <div className="size-10 bg-slate-100 transition-all duration-500 group-hover:bg-indigo-50 flex items-center justify-center rounded-md">
              <stat.Icon size={22} className="text-slate-600 transition-all duration-500 group-hover:text-indigo-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 items-center">
        <Link to='/employee/attendance' className="bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4] flex items-center gap-2">
          Mark Attendance
          <LuArrowRight />
        </Link>
        <Link to='/employee/leave' className="text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
          Apply for Leave
        </Link>
      </div>

    </section>
  )
}

export default EmployeeDashboard;
