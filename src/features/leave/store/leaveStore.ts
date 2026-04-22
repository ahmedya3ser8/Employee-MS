import { axiosInstance } from "@/lib/axios";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import type { LeaveStatus } from "../types/leave.types";

interface ILeave {
  _id: string;
  type: 'casual' | 'annual' | 'sick';
  startDate: string;
  endDate: string;
  reason: string;
  status: LeaveStatus;
  employee: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

interface ILeaveResponse {
  success: boolean;
  message: string;
  data: ILeave[];
}

interface IFormData {
  type: 'casual' | 'annual' | 'sick';
  startDate: string;
  endDate: string;
  reason: string;
}

interface ILeaveStats {
  sick: string;
  casual: number;
  annual: number;
}

interface LeaveState {
  isLeaveLoading: boolean;
  isCreateLeaveLoading: boolean;
  loadingLeaveId: string | null;
  type: string | null;
  leaveList: ILeave[] | [];
  leaveStats: ILeaveStats | null;

  getLeaves: () => Promise<void>;
  getMyLeaves: () => Promise<void>;
  getLeaveStats: () => Promise<void>;
  createLeave: (formData: IFormData) => Promise<void>;
  updateLeaveStatus: (leaveId: string, status: LeaveStatus) => Promise<void>;
}

export const useLeaveStore = create<LeaveState>((set) => ({
  isLeaveLoading: false,
  isCreateLeaveLoading: false,
  loadingLeaveId: null,
  type: null,
  leaveList: [],
  leaveStats: null,

  getLeaves: async () => {
    try {
      set({ isLeaveLoading: true });
      const { data } = await axiosInstance.get<ILeaveResponse>('/leaves');
      set({ leaveList: data.data, isLeaveLoading: false })
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isLeaveLoading: false });
    }
  },

  getMyLeaves: async () => {
    try {
      set({ isLeaveLoading: true });
      const { data } = await axiosInstance.get<ILeaveResponse>('/leaves/me');
      set({ leaveList: data.data, isLeaveLoading: false })
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isLeaveLoading: false });
    }
  },

  getLeaveStats: async () => {
    try {
      set({ isLeaveLoading: true });
      const { data } = await axiosInstance.get('/leaves/stats');
      set({ leaveStats: data.data, isLeaveLoading: false })
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isLeaveLoading: false });
    }
  },

  createLeave: async (formData) => {
    try {
      set({ isCreateLeaveLoading: true });
      const { data } = await axiosInstance.post('/leaves', formData);
      set((state) => ({
        leaveList: [data.data, ...state.leaveList],
        isCreateLeaveLoading: false,
      }));
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isCreateLeaveLoading: false });
    }
  },

  updateLeaveStatus: async (leaveId, status) => {
    try {
      set({ loadingLeaveId: leaveId, type: status });
      const { data } = await axiosInstance.patch(`/leaves/${leaveId}`, { status });
      console.log(data);
      set((state) => ({
        leaveList: state.leaveList.map((leave) =>
          leave._id === leaveId ? { ...leave, status } : leave
        ),
        loadingLeaveId: null,
        type: null
      }));
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ loadingLeaveId: null, type: null });
    }
  },
}))
