import { StatsCard } from "@/components";
import type { AdminGridStatsProps } from "../types/dashboard.types";

import { FiFileText, FiUsers } from "react-icons/fi";
import { LuBuilding2, LuCalendar } from "react-icons/lu";

const AdminGridStats = ({ pendingLeaves, todaysAttendance, totalDepartment, totalEmployees }: AdminGridStatsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      
      <StatsCard 
        title="Total Employees" 
        value={totalEmployees} 
        Icon={FiUsers} 
      />
      
      <StatsCard 
        title="Departments" 
        value={totalDepartment} 
        Icon={LuBuilding2} 
      />

      <StatsCard 
        title="Today's Attendance" 
        value={todaysAttendance} 
        Icon={LuCalendar} 
      />

      <StatsCard 
        title="Pending Leaves" 
        value={pendingLeaves} 
        Icon={FiFileText} 
      />

    </div>
  )
}

export default AdminGridStats;
