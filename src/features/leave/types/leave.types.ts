export type LeaveStatus = 'approved' | 'rejected' | 'pending';

export type LeaveActionsProps = {
  status: LeaveStatus;
  loadingLeaveId?: string;
  type?: string;
  id: string;
  handleUpdateLeave: (id: string, status: LeaveStatus) => void;
}

export type StatusBadgeProps = {
  status: LeaveStatus;
}