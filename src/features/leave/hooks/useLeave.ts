import { useEffect, useState } from "react";

import { useLeaveStore } from "../store/leaveStore";
import type { LeaveStatus } from "../types/leave.types";
import { useAuthStore } from "@/features/auth/store/authStore";

const useLeave = () => {
  const { getLeaves, updateLeaveStatus, getMyLeaves, getLeaveStats, isLeaveLoading, loadingLeaveId, type, leaveList } = useLeaveStore();
  const { role } = useAuthStore();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (role === 'admin') {
      getLeaves();
    }
  }, [getLeaves, role]);

  useEffect(() => {
    if (role === 'employee') {
      getMyLeaves();
      getLeaveStats();
    }
  }, [getLeaveStats, getMyLeaves, role]);

  const handleUpdateLeave = (leaveId: string, status: LeaveStatus) => {
    updateLeaveStatus(leaveId, status);
  }

  return {
    isLeaveLoading,
    loadingLeaveId,
    type,
    leaveList,
    showModal,
    handleUpdateLeave,
    setShowModal,
  }
}

export default useLeave;
