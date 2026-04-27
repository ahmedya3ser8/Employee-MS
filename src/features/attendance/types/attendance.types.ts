import type { IAttendance } from "../store/attendanceStore";

export type AttendanceButtonProps = {
  clockInOut: () => void;
  isCreateAttendanceLoading: boolean;
}

export type AttendanceListProps = {
  attendanceList: IAttendance[]
}
