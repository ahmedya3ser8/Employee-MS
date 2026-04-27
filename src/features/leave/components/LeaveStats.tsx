import { LuThermometer, LuTreePalm, LuUmbrella } from "react-icons/lu";

import { useLeaveStore } from "../store/leaveStore"; 
import { StatsCard } from "@/components";

const LeaveStats = () => {
  const { leaveStats } = useLeaveStore();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

      <StatsCard 
        title="Sick Leave" 
        value={<> {leaveStats?.sick || 0} <span className="text-[#90A1B9] text-base"> taken </span> </>} 
        Icon={LuThermometer} 
      />

      <StatsCard 
        title="Casual Leave" 
        value={<> {leaveStats?.casual || 0} <span className="text-[#90A1B9] text-base"> taken </span> </>} 
        Icon={LuUmbrella} 
      />

      <StatsCard 
        title="Annual Leave" 
        value={<> {leaveStats?.annual || 0} <span className="text-[#90A1B9] text-base"> taken </span> </>} 
        Icon={LuTreePalm} 
      />

    </div>
  )
}

export default LeaveStats;
