import { axiosInstance } from "@/lib/axios";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export interface IAttendance {
  _id: string;
  date: string;
  checkIn: string;
  checkOut: string;
  workingHours: number;
  status: string;
  dayType: string;
  employee: string;
}

interface IAttendanceResponse {
  success: boolean;
  message: string;
  data: IAttendance[]
}

interface ICreateAttendanceResponse {
  success: boolean;
  message: string;
  data: IAttendance;
}

interface IAttendanceStats {
  daysPresent: number;
  lateArrivals: number;
  avgWorkHours: number;
}

interface IAttendanceStatsResponse {
  success: boolean;
  data: IAttendanceStats;
}

interface AttendanceState {
  isAttendanceLoading: boolean;
  isAttendanceStatsLoading: boolean;
  isCreateAttendanceLoading: boolean;
  attendanceList: IAttendance[] | [];
  attendanceStats: IAttendanceStats | null;

  getAttendances: () => Promise<void>;
  getAttendanceStats: () => Promise<void>;
  createAttendance: () => Promise<void>;
}

export const useAttendanceStore = create<AttendanceState>((set) => ({
  isAttendanceLoading: false,
  isAttendanceStatsLoading: false,
  isCreateAttendanceLoading: false,
  attendanceList: [],
  attendanceStats: null,

  getAttendances: async () => {
    try {
      set({ isAttendanceLoading: true });
      const { data } = await axiosInstance.get<IAttendanceResponse>('/attendance');
      console.log(data);
      set({ attendanceList: data.data, isAttendanceLoading: false })
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isAttendanceLoading: false });
    }
  },

  getAttendanceStats: async () => {
    try {
      set({ isAttendanceStatsLoading: true });
      const { data } = await axiosInstance.get<IAttendanceStatsResponse>('/attendance/stats');
      console.log(data);
      set({ attendanceStats: data.data, isAttendanceStatsLoading: false })
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isAttendanceStatsLoading: false });
    }
  },

  createAttendance: async () => {
    try {
      set({ isCreateAttendanceLoading: true });
      const { data } = await axiosInstance.post<ICreateAttendanceResponse>('/attendance');
      console.log(data);
      set((state) => ({
        attendanceList: state.attendanceList.map((item) =>
          item._id === data.data._id ? data.data : item
        ),
        isCreateAttendanceLoading: false,
      }));
      toast.success(data.message);
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isCreateAttendanceLoading: false });
    }
  },
}));
