import { axiosInstance } from "@/shared";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

interface IProfile {
  firstName: string;
  lastName: string;
  position: string;
  email: string;
  bio?: string;
}

interface IProfileResponse {
  success: boolean;
  message: string;
  data: IProfile;
}

interface ProfileState {
  profileData: IProfile | null;
  isProfileLoading: boolean;
  isUpdatingProfile: boolean;
  isChangePassword: boolean;

  getProfile: () => Promise<void>;
  updateProfile: (formData: IProfile) => Promise<IProfileResponse>;
  changePassword: (formData: { currentPassword: string; newPassword: string; }) => Promise<IProfileResponse>;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profileData: null,
  isProfileLoading: false,
  isUpdatingProfile: false,
  isChangePassword: false,

  getProfile: async () => {
    try {
      set({ isProfileLoading: true });
      const { data } = await axiosInstance.get<IProfileResponse>('/users/profile');
      set({ profileData: data.data, isProfileLoading: false })
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isProfileLoading: false });
    }
  },

  updateProfile: async (formData) => {
    try {
      set({ isUpdatingProfile: true });
      const { data } = await axiosInstance.patch<IProfileResponse>('/users/profile', formData);
      set({ profileData: data.data, isUpdatingProfile: false });
      return data;
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isUpdatingProfile: false });
      throw err;
    }
  },

  changePassword: async (formData) => {
    try {
      set({ isChangePassword: true });
      const { data } = await axiosInstance.patch<IProfileResponse>('/users/changePassword', formData);
      set({ profileData: data.data, isChangePassword: false });
      return data;
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      set({ isChangePassword: false });
      throw err;
    }
  },
}))