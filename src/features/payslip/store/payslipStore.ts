import { axiosInstance } from "@/lib/axios";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import type { IEmployee } from "../../admin/models/employee";

interface IPayslip {
  _id: string;
  month: number;
  year: number;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  employee: IEmployee;
}

interface IPayslipResponse {
  success: boolean;
  message: string;
  data: IPayslip[];
}

interface IFormData {
  month: number;
  year: number;
  basicSalary: number;
  allowances?: number;
  deductions?: number;
  employee: string;
}

interface PayslipState {
  isPayslipLoading: boolean;
  isCreatePayslipLoading: boolean;
  adminPayslipList: IPayslip[] | [];
  employeePayslipList: IPayslip[] | [];
  payslipData: IPayslip | null;

  getPayslips: () => Promise<void>;
  getPayslip: (payslipId: string) => Promise<void>;
  getMyPayslips: () => Promise<void>;
  createPayslip: (formData: IFormData) => Promise<void>;
}

export const usePayslipStore = create<PayslipState>((set) => ({
  isPayslipLoading: false,
  isCreatePayslipLoading: false,
  adminPayslipList: [],
  employeePayslipList: [],
  payslipData: null,

  getPayslips: async () => {
    try {
      set({ isPayslipLoading: true });
      const { data } = await axiosInstance.get<IPayslipResponse>('/payslips');
      set({ adminPayslipList: data.data, isPayslipLoading: false })
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isPayslipLoading: false });
    }
  },

  getPayslip: async (payslipId) => {
    try {
      set({ isPayslipLoading: true });
      const { data } = await axiosInstance.get(`/payslips/${payslipId}`);
      set({ payslipData: data.data, isPayslipLoading: false })
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isPayslipLoading: false });
    }
  },

  getMyPayslips: async () => {
    try {
      set({ isPayslipLoading: true });
      const { data } = await axiosInstance.get<IPayslipResponse>('/payslips/me');
      set({ employeePayslipList: data.data, isPayslipLoading: false })
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isPayslipLoading: false });
    }
  },

  createPayslip: async (formData) => {
    try {
      set({ isCreatePayslipLoading: true });
      const { data } = await axiosInstance.post('/payslips', formData);
      set((state) => ({
        payslipList: [data.data, ...state.adminPayslipList],
        isCreatePayslipLoading: false,
      }));
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isCreatePayslipLoading: false });
    }
  },
}))
