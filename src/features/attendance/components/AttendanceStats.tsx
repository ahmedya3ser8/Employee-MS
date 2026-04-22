import { useEffect } from "react";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";

import { useAttendanceStore } from "../store/attendanceStore";

const AttendanceStats = () => {
  const { getAttendanceStats,  attendanceStats } = useAttendanceStore();

  useEffect(() => {
    getAttendanceStats();
  }, [getAttendanceStats])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

      <div className="border border-[#E2E8F0] rounded-lg p-6 flex items-center justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group">
        <div className="absolute w-1 h-full bg-[#62748EB2] left-0 rounded-tr-2xl rounded-br-2xl transition-all duration-500 group-hover:bg-indigo-500/70"></div>
        <div className="space-y-1">
          <h4 className="text-sm text-[#314158] font-medium"> Days Present </h4>
          <span className="text-2xl font-bold text-[#0F172B]"> {attendanceStats?.daysPresent} </span>
        </div>
        <div className="size-10 bg-slate-100 transition-all duration-500 group-hover:bg-indigo-50 flex items-center justify-center rounded-md">
          <LuCalendar size={22} className="text-slate-600 transition-all duration-500 group-hover:text-indigo-500" />
        </div>
      </div>

      <div className="border border-[#E2E8F0] rounded-lg p-6 flex items-center justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group">
        <div className="absolute w-1 h-full bg-[#62748EB2] left-0 rounded-tr-2xl rounded-br-2xl transition-all duration-500 group-hover:bg-indigo-500/70"></div>
        <div className="space-y-1">
          <h4 className="text-sm text-[#314158] font-medium"> Late Arrivals </h4>
          <span className="text-2xl font-bold text-[#0F172B]"> {attendanceStats?.lateArrivals} </span>
        </div>
        <div className="size-10 bg-slate-100 transition-all duration-500 group-hover:bg-indigo-50 flex items-center justify-center rounded-md">
          <AiOutlineExclamationCircle size={22} className="text-slate-600 transition-all duration-500 group-hover:text-indigo-500" />
        </div>
      </div>

      <div className="border border-[#E2E8F0] rounded-lg p-6 flex items-center justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group">
        <div className="absolute w-1 h-full bg-[#62748EB2] left-0 rounded-tr-2xl rounded-br-2xl transition-all duration-500 group-hover:bg-indigo-500/70"></div>
        <div className="space-y-1">
          <h4 className="text-sm text-[#314158] font-medium"> Avg. Work Hrs </h4>
          <span className="text-2xl font-bold text-[#0F172B]"> {attendanceStats?.avgWorkHours} Hrs </span>
        </div>
        <div className="size-10 bg-slate-100 transition-all duration-500 group-hover:bg-indigo-50 flex items-center justify-center rounded-md">
          <MdOutlineWatchLater size={22} className="text-slate-600 transition-all duration-500 group-hover:text-indigo-500" />
        </div>
      </div>
      
    </div>
  )
}

export default AttendanceStats;
