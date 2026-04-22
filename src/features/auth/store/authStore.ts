import { create } from 'zustand';
import { isAxiosError } from 'axios';

import { axiosInstance } from '@/lib/axios'; 
import toast from 'react-hot-toast';
import type { IEmployee } from '@/features/employee/types/employee.types'; 

interface IAuthResponse {
  success: boolean;
  message: string;
  data: IEmployee;
}

interface AuthState {
  employee: IEmployee | null;
  loading: boolean;
  isAuthenticated: boolean;
  isChangePassword: boolean;
  role: 'admin' | 'employee' | null;
  initialized: boolean;

  login: (formData: { email: string; password: string }) => Promise<IAuthResponse>;
  getMe: () => Promise<IAuthResponse | null>;
  logout: () => Promise<void>;
  changePassword: (formData: { currentPassword: string; newPassword: string; }) => Promise<IAuthResponse>;
}

export const useAuthStore = create<AuthState>((set) => ({
  employee: null,
  role: null,
  loading: false,
  isAuthenticated: false,
  initialized: false,
  isChangePassword: false,

  login: async (formData) => {
    try {
      set({ loading: true })
      const { data } = await axiosInstance.post<IAuthResponse>('/auth/login', formData);
      set({ employee: data.data, role: data.data.user.role, isAuthenticated: true, loading: false });
      return data;
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ loading: false });
      throw err;
    }
  },

  getMe: async () => {
    try {
      set({ loading: true })
      const { data } = await axiosInstance.get<IAuthResponse>('/auth/getMe');
      set({ employee: data.data, role: data.data.user.role, isAuthenticated: true, loading: false, initialized: true });
      return data;
    } catch {
      set({ loading: false, isAuthenticated: false, role: null, employee: null, initialized: true });
      return null;
    }
  },

  logout: async () => {
    try {
      set({ loading: true })
      const { data } = await axiosInstance.post<IAuthResponse>('/auth/logout');
      console.log(data);
      set({ employee: null, role: null, isAuthenticated: false, loading: false });
    } catch {
      set({ employee: null, role: null, isAuthenticated: false, loading: false });
    }
  },

  changePassword: async (formData) => {
    try {
      set({ isChangePassword: true });
      const { data } = await axiosInstance.patch<IAuthResponse>('/auth/changePassword', formData);
      set({ employee: data.data, isChangePassword: false });
      return data;
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.errors[0].message);
      }
      set({ isChangePassword: false });
      throw err;
    }
  },
}))
