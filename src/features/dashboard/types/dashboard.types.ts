export type AdminGridStatsProps = {
  totalEmployees: number;
  totalDepartment: number;
  todaysAttendance: number;
  pendingLeaves: number;
}

export type EmployeeGridStatsProps = {
  daysPresent: number;
  pendingLeaves: number;
  latestPayslip: number;
}
