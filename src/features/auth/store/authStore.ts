import { create } from 'zustand';
import { isAxiosError } from 'axios';

import { axiosInstance } from '@/shared';
import toast from 'react-hot-toast';

interface IUser {
  userId: string;
  email: string;
  role: 'admin' | 'employee';
}

interface IResponse {
  success: boolean;
  message: string;
  data: IUser
}

interface AuthState {
  user: IUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  role: 'admin' | 'employee' | null;
  initialized: boolean;

  login: (formData: { email: string; password: string }) => Promise<IResponse>;
  getMe: () => Promise<IResponse | null>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: null,
  loading: false,
  isAuthenticated: false,
  initialized: false,

  login: async (formData) => {
    try {
      set({ loading: true })
      const { data } = await axiosInstance.post<IResponse>('/auth/login', formData);
      console.log(data);
      const user = data;
      set({ user: user.data, role: user.data.role, isAuthenticated: true, loading: false });
      return user;
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
      const { data } = await axiosInstance.get<IResponse>('/auth/getMe');
      console.log(data);
      const user = data;
      set({ user: user.data, role: user.data.role, isAuthenticated: true, loading: false, initialized: true });
      return user;
    } catch {
      set({ loading: false, isAuthenticated: false, role: null, user: null, initialized: true });
      return null;
    }
  },

  logout: async () => {
    try {
      set({ loading: true })
      const { data } = await axiosInstance.post<IResponse>('/auth/logout');
      console.log(data);
      set({ user: null, role: null, isAuthenticated: false, loading: false });
    } catch {
      set({ user: null, role: null, isAuthenticated: false, loading: false });
    }
  },
}))
