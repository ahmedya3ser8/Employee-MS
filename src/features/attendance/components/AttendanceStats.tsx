import { useEffect } from "react";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";

import { useAttendanceStore } from "../store/attendanceStore";
import { StatsCard } from "@/components";

const AttendanceStats = () => {
  const { getAttendanceStats,  attendanceStats } = useAttendanceStore();

  useEffect(() => {
    getAttendanceStats();
  }, [getAttendanceStats])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

      <StatsCard 
        title="Days Present" 
        value={attendanceStats?.daysPresent as number} 
        Icon={LuCalendar} 
      />

      <StatsCard 
        title="Late Arrivals" 
        value={attendanceStats?.lateArrivals as number} 
        Icon={AiOutlineExclamationCircle} 
      />

      <StatsCard 
        title="Avg. Work Hrs" 
        value={<> {attendanceStats?.avgWorkHours} Hrs </>} 
        Icon={MdOutlineWatchLater} 
      />

    </div>
  )
}

export default AttendanceStats;
