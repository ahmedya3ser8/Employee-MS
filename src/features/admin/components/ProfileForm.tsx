import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { Input, Textarea } from "@/shared";
import { FiUser } from "react-icons/fi";
import { LuLoader, LuSave } from "react-icons/lu";
import { useProfileStore } from "../store/profileStore";
import { profileSchema, type ProfileFormValues } from "../validations/profile.schema";

const ProfileForm = () => {
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

  if (isProfileLoading) return <div className="flex justify-center items-center h-[70vh]">
    <span className="loader"></span>
  </div>

  return (
    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-8">

      <div className="card border border-slate-200 rounded-md p-6">

        <h2 className="font-medium text-[#0F172B] border-b border-slate-100 pb-6 flex items-center gap-2"> 
          <FiUser size={20} className="text-[#90A1B9]" />
          Public Profile
        </h2>

        <div className="flex flex-col gap-6 pt-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            <Input 
              id="firstName"
              label="First Name"
              placeholder="john"
              register={register}
              name="firstName"
              error={errors.firstName?.message as string}
            />

            <Input 
              id="lastName"
              label="Last Name"
              placeholder="doe"
              register={register}
              name="lastName"
              error={errors.lastName?.message as string}
            />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            <Input 
              id="email"
              type="email"
              label="Email"
              placeholder="john@gmail.com"
              register={register}
              name="email"
              error={errors.email?.message as string}
            />

            <Input 
              id="position"
              label="Position"
              placeholder="Sales"
              register={register}
              name="position"
              error={errors.position?.message as string}
            />

          </div>

          <Textarea 
            id="bio"
            label="Bio (Optional)"
            register={register}
            name="bio"
            placeholder="Write a brief bio..."
            error={errors.bio?.message as string}
          />

        </div>

      </div>

      <div className="flex gap-3 items-center justify-end">
        <button type="submit" className="bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4] flex items-center gap-2">
          <LuSave />
          {isUpdatingProfile ? <LuLoader size={22} className='animate-spin mx-auto' /> : 'Save Changes'}
        </button>
      </div>

    </form>
  )
}

export default ProfileForm;
