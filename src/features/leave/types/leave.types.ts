export type Status = 'approved' | 'rejected' | 'pending' | 'present' | 'absent' | 'late' | 'full day' | 'three quarter day' | 'half day' | 'short day';

export type LeaveActionsProps = {
  status: Status;
  loadingLeaveId?: string;
  type?: string;
  id: string;
  handleUpdateLeave: (id: string, status: Status) => void;
}

export type StatusBadgeProps = {
  status: Status;
}

export type LeaveHeaderProps = {
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description: string;
  isBtn?: boolean;
}