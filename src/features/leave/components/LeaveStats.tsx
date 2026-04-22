import { LuThermometer, LuTreePalm, LuUmbrella } from "react-icons/lu";

import { useLeaveStore } from "../store/leaveStore"; 

const LeaveStats = () => {
  const { leaveStats } = useLeaveStore();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

      <div className="col border border-[#E2E8F0] rounded-lg p-6 flex items-center justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group">
        <div className="absolute w-1 h-full bg-[#62748EB2] left-0 rounded-tr-2xl rounded-br-2xl transition-all duration-500 group-hover:bg-indigo-500/70"></div>
        <div className="space-y-1">
          <h4 className="text-sm text-[#314158] font-medium"> Sick Leave </h4>
          <p className="text-2xl font-bold text-[#0F172B] flex items-center gap-1"> 
            {leaveStats?.sick || 0} 
            <span className="text-[#90A1B9] text-base"> taken </span>
          </p>
        </div>
        <div className="size-10 bg-slate-100 transition-all duration-500 group-hover:bg-indigo-50 flex items-center justify-center rounded-md">
          <LuThermometer size={22} className="text-slate-600 transition-all duration-500 group-hover:text-indigo-500" />
        </div>
      </div>
      
      <div className="col border border-[#E2E8F0] rounded-lg p-6 flex items-center justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group">
        <div className="absolute w-1 h-full bg-[#62748EB2] left-0 rounded-tr-2xl rounded-br-2xl transition-all duration-500 group-hover:bg-indigo-500/70"></div>
        <div className="space-y-1">
          <h4 className="text-sm text-[#314158] font-medium"> Casual Leave </h4>
          <p className="text-2xl font-bold text-[#0F172B] flex items-center gap-1"> 
            {leaveStats?.casual || 0} 
            <span className="text-[#90A1B9] text-base"> taken </span>
          </p>
        </div>
        <div className="size-10 bg-slate-100 transition-all duration-500 group-hover:bg-indigo-50 flex items-center justify-center rounded-md">
          <LuUmbrella size={22} className="text-slate-600 transition-all duration-500 group-hover:text-indigo-500" />
        </div>
      </div>

      <div className="col border border-[#E2E8F0] rounded-lg p-6 flex items-center justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group">
        <div className="absolute w-1 h-full bg-[#62748EB2] left-0 rounded-tr-2xl rounded-br-2xl transition-all duration-500 group-hover:bg-indigo-500/70"></div>
        <div className="space-y-1">
          <h4 className="text-sm text-[#314158] font-medium"> Annual Leave </h4>
          <p className="text-2xl font-bold text-[#0F172B] flex items-center gap-1"> 
            {leaveStats?.annual || 0} 
            <span className="text-[#90A1B9] text-base"> taken </span>
          </p>
        </div>
        <div className="size-10 bg-slate-100 transition-all duration-500 group-hover:bg-indigo-50 flex items-center justify-center rounded-md">
          <LuTreePalm size={22} className="text-slate-600 transition-all duration-500 group-hover:text-indigo-500" />
        </div>
      </div>

    </div>
  )
}

export default LeaveStats;
