import { axiosInstance } from "@/lib/axios";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

interface IAdminStats {
  totalEmployees: number;
  totalDepartment: number;
  todaysAttendance: number;
  pendingLeaves: number;
}

interface IEmployeeStats {
  daysPresent: number;
  pendingLeaves: number;
  latestPayslip: number;
}

interface DashboardState {
  loading: boolean;
  adminDashboardStats: IAdminStats | null;
  employeeDashboardStats: IEmployeeStats | null;

  getAdminDashboard: () => Promise<void>;
  getEmployeeDashboard: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  loading: false,
  adminDashboardStats: null,
  employeeDashboardStats: null,

  getAdminDashboard: async () => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.get('/dashboard/admin');
      set({ adminDashboardStats: data.data, loading: false })
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ loading: false });
    }
  },

  getEmployeeDashboard: async () => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.get('/dashboard/employee');
      set({ employeeDashboardStats: data.data, loading: false })
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ loading: false });
    }
  },
}));
