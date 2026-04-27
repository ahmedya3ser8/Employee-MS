import { useEffect } from "react";

import { Loader } from "@/components";

import { useAuthStore } from "@/features/auth"; 
import { useDashboardStore } from "../store/dashboardStore";

import DashboardActions from "../components/DashboardActions";
import DashboardHeader from "../components/DashboardHeader";
import EmployeeGridStats from "../components/EmployeeGridStats";

const EmployeeDashboard = () => {
  const { employeeDashboardStats, getEmployeeDashboard, loading } = useDashboardStore();
  const { employee } = useAuthStore();

  useEffect(() => {
    getEmployeeDashboard();
  }, [getEmployeeDashboard])

  if (loading) return <Loader />

  return (
    <section className="space-y-8">

      <DashboardHeader 
        title={`${employee?.firstName}, ${employee?.lastName}!`}
        description={`${employee?.position} - ${employee?.department}`}
      />

      <EmployeeGridStats 
        daysPresent={employeeDashboardStats?.daysPresent as number}
        latestPayslip={employeeDashboardStats?.latestPayslip as number}
        pendingLeaves={employeeDashboardStats?.pendingLeaves as number}
      />

      <DashboardActions />

    </section>
  )
}

export default EmployeeDashboard;
