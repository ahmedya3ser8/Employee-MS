import { useEffect } from "react";

import AttendanceHeader from "../components/AttendanceHeader";
import AttendanceStats from "../components/AttendanceStats";
import AttendanceButton from "../components/AttendanceButton";
import AttendanceList from "../components/AttendanceList";

import { useAttendanceStore } from "../store/attendanceStore";
import { Loader } from "@/components";

const Attendance = () => {
  const { getAttendances, createAttendance, attendanceList, isAttendanceLoading, isCreateAttendanceLoading } = useAttendanceStore();

  useEffect(() => {
    getAttendances();
  }, [getAttendances]);

  const clockInOut = async () => {
    await createAttendance();
    getAttendances();
  }

  if (isAttendanceLoading) return <Loader />

  return (
    <section className="space-y-8">

      <AttendanceHeader />

      <AttendanceStats />

      <AttendanceList  attendanceList={attendanceList} />

      <AttendanceButton 
        clockInOut={clockInOut} 
        isCreateAttendanceLoading={isCreateAttendanceLoading} 
      />

    </section>
  )
}

export default Attendance;
