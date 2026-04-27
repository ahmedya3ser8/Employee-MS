import { Input } from "@/components";

import useChangePass from "../hooks/useChangePass";
import type { ChangePassProps } from "../types/profile.types";

import { IoMdClose } from "react-icons/io";
import { LuLoader, LuLock } from "react-icons/lu";

const ChangePassModal = ({ setShowModal }: ChangePassProps) => {
  const { errors, handleSubmit, isChangePassword, register, submitForm } = useChangePass({ setShowModal });

  return (
    <div className="modal fixed z-50 inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">

        <div className="flex items-center gap-3">
          <LuLock size={24} />
          <div className="flex justify-between items-center flex-1">
            <h3 className="font-medium text-[#0F172B]"> Change Password </h3>
            <button onClick={() => setShowModal(prev => !prev)} className="p-2 transition-all duration-300 hover:bg-slate-100 cursor-pointer">
              <IoMdClose size={20} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5 mt-5">

          <Input 
            id="currentPassword"
            type="password"
            label="Current Password"
            placeholder="******"
            register={register}
            name='currentPassword'
            error={errors.currentPassword?.message as string}
          />

          <Input 
            id="newPassword"
            type="password"
            label="New Password"
            placeholder="******"
            register={register}
            name='newPassword'
            error={errors.newPassword?.message as string}
          />

          <div className="flex gap-3 items-center">
            <button type="button" onClick={() => setShowModal(prev => !prev)} className="w-full lg:w-1/2 text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
              Cancel
            </button>
            <button type="submit" className="w-full lg:w-1/2 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
              {isChangePassword ? <LuLoader size={22} className='animate-spin mx-auto' /> : 'Update Password'}
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default ChangePassModal;
