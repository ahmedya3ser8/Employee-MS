import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import { useProfileStore } from "../store/profileStore";
import { profileSchema, type ProfileFormValues } from "../validations/profile.schema";

const useProfileForm = () => {
  const { getProfile, updateProfile, profileData, isProfileLoading, isUpdatingProfile } = useProfileStore();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProfileFormValues>({
    mode: 'onTouched',
    resolver: zodResolver(profileSchema)
  })

  const submitForm: SubmitHandler<ProfileFormValues> = async (data) => {
    const res = await updateProfile(data);
    toast.success(res.message);
  }

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    if (!profileData) return;
    reset({
      firstName: profileData?.firstName,
      lastName: profileData?.lastName,
      email: profileData?.email,
      bio: profileData?.bio,
      position: profileData?.position,
    })
  }, [profileData, reset]);

  return {
    submitForm,
    register,
    handleSubmit,
    errors,
    isProfileLoading,
    isUpdatingProfile
  }
}

export default useProfileForm;
