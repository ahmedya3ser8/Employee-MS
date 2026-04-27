import { StatsCard } from "@/components";
import type { EmployeeGridStatsProps } from "../types/dashboard.types";

import { FiDollarSign, FiFileText } from "react-icons/fi";
import { LuCalendar } from "react-icons/lu";

const EmployeeGridStats = ({ daysPresent, latestPayslip, pendingLeaves }: EmployeeGridStatsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

      <StatsCard 
        title="Days Present" 
        value={daysPresent} 
        Icon={LuCalendar} 
      />

      <StatsCard 
        title="Pending Leaves" 
        value={pendingLeaves} 
        Icon={FiFileText} 
      />

      <StatsCard 
        title="Latest Payslip" 
        value={`$${latestPayslip}`} 
        Icon={FiDollarSign} 
      />
      
    </div>
  )
}

export default EmployeeGridStats;
