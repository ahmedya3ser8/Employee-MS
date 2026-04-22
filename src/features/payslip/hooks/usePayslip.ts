import { useEffect, useState } from "react";
import { usePayslipStore } from "../store/payslipStore";
import { useAuthStore } from "@/features/auth/store/authStore";

const usePayslip = () => {
  const { getPayslips, getMyPayslips, isPayslipLoading, adminPayslipList, employeePayslipList } = usePayslipStore();
  const { role } = useAuthStore();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (role === 'admin') {
      getPayslips();
    }
  }, [getPayslips, role]);

  useEffect(() => {
    if (role === 'employee') {
      getMyPayslips();
    }
  }, [getMyPayslips, role]);

  return {
    isPayslipLoading,
    adminPayslipList,
    employeePayslipList,
    showModal,
    setShowModal,
  }
}

export default usePayslip;
