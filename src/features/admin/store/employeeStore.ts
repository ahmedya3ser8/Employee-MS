import toast from "react-hot-toast";
import { create } from "zustand";
import { isAxiosError } from "axios";

import { axiosInstance } from "@/shared";
import type { IEmployee, IEmployeeForm, IEmployeeResponse } from "../models/employee";

interface EmployeeState {
  employeeList: IEmployee[] | [];
  employee: IEmployee | null;
  loading: boolean;

  getEmployees: (employeeName?: string, department?: string) => Promise<IEmployeeResponse>;
  getEmployee: (employeeId: string) => Promise<{ success: boolean; data: IEmployee, message: string; }>;
  createEmployee: (formData: IEmployeeForm) => Promise<IEmployeeResponse>;
  updateEmployee: (formData: IEmployeeForm, employeeId: string) => Promise<IEmployeeResponse>;
  deleteEmployee: (employeeId: string) => Promise<{ success: boolean; data: IEmployee, message: string; }>;
}

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employeeList: [],
  employee: null,
  loading: false,

  getEmployees: async (employeeName?: string, department?: string) => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.get<IEmployeeResponse>(`/employees`, {
        params: {
          search: employeeName || undefined,
          department: department || undefined
        }
      });
      console.log(data);
      set({ employeeList: data.data, loading: false });
      return data;
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ loading: false });
      throw err;
    }
  },

  getEmployee: async (employeeId) => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.get<{ success: boolean; data: IEmployee, message: string; }>(`/employees/${employeeId}`);
      console.log(data);
      set({ employee: data.data, loading: false });
      return data;
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ loading: false });
      throw err;
    }
  },

  createEmployee: async (formData) => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.post<IEmployeeResponse>('/employees', formData);
      console.log(data);
      set({ loading: false });
      return data;
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ loading: false });
      throw err;
    }
  },

  updateEmployee: async (formData, employeeId) => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.patch<IEmployeeResponse>(`/employees/${employeeId}`, formData);
      console.log(data);
      set({ loading: false });
      return data;
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ loading: false });
      throw err;
    }
  },

  deleteEmployee: async (employeeId) => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.delete<{ success: boolean; data: IEmployee, message: string; }>(`/employees/${employeeId}`);
      console.log(data);
      set((state) => ({ employeeList: state.employeeList.filter((emp) => emp._id !== employeeId), loading: false }))
      return data;
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ loading: false });
      throw err;
    }
  },
}))
