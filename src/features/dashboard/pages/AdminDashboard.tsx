import { useEffect } from "react";

import { Loader } from "@/components";
import AdminGridStats from "../components/AdminGridStats";
import DashboardHeader from "../components/DashboardHeader";
import { useDashboardStore } from "../store/dashboardStore";

const AdminDashboard = () => {
  const { adminDashboardStats, getAdminDashboard, loading } = useDashboardStore();

  useEffect(() => {
    getAdminDashboard();
  }, [getAdminDashboard])

  if (loading) return <Loader />

  return (
    <section className="space-y-8">

      <DashboardHeader 
        title="Dashboard"
        description="Welcome back, Admin — here's your overview"
      />

      <AdminGridStats 
        pendingLeaves={adminDashboardStats?.pendingLeaves as number}
        todaysAttendance={adminDashboardStats?.todaysAttendance as number}
        totalDepartment={adminDashboardStats?.totalDepartment as number}
        totalEmployees={adminDashboardStats?.totalEmployees as number}
      />

    </section>
  )
}

export default AdminDashboard;
