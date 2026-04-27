import { DataTable, StatusBadge } from "@/components";
import { formatDate, formatTime, formatWorkingHours } from "@/utils/formateDate";
import type { AttendanceListProps } from "../types/attendance.types";

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
            <StatusBadge 
              status={row.dayType}
            />
          )},
          { header: 'Status', render: (row) => (
            <StatusBadge 
              status={row.status}
            />
          )},
        ]}
        data={attendanceList}
      />
    </div>
  )
}

export default AttendanceList;
