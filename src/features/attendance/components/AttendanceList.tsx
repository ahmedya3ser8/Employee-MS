import { DataTable } from "@/components";
import { formatDate, formatTime, formatWorkingHours } from "@/utils/formateDate";
import type { IAttendance } from "../store/attendanceStore";

type AttendanceListProps = {
  attendanceList: IAttendance[]
}

const AttendanceList = ({ attendanceList }: AttendanceListProps) => {
  return (
    <div className="card flex flex-col gap-5">
      
      <h3 className="text-[#0F172B] font-semibold"> Recent Activity </h3>

      <DataTable 
        columns={[
          { header: 'Date', render: (row) => formatDate(row.date) },
          { header: 'Check In', render: (row) => formatTime(row.checkIn) },
          { header: 'Check Out', render: (row) => formatTime(row.checkOut) },
          { header: 'Working Hours', render: (row) => formatWorkingHours(row.workingHours) },
          { header: 'Day Type', render: (row) => (
            <span className="bg-[#ECFDF5] text-[#007A55] py-1 px-2.5 rounded-md shadow-sm text-xs"> 
              {row.dayType} 
            </span>
          )},
          { header: 'Status', render: (row) => (
            <span className="bg-[#ECFDF5] text-[#007A55] py-1 px-2.5 rounded-md shadow-sm text-xs"> 
              {row.status}
            </span>
          )},
        ]}
        data={attendanceList}
      />
    </div>
  )
}

export default AttendanceList;
