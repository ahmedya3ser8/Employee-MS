import { useState } from "react";

import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { LuLock, LuSave } from "react-icons/lu";

const EmployeeSettingsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="space-y-8">

      <div className="space-y-1">
        <h1 className="text-2xl font-medium text-[#0F172B]"> Settings </h1>
        <p className="text-sm text-[#62748E]"> Manage your account and preferences </p>
      </div>

      <form className="flex flex-col gap-8">

        <div className="card border border-slate-200 rounded-md p-6">

          <h2 className="font-medium text-[#0F172B] border-b border-slate-100 pb-6 flex items-center gap-2"> 
            <FiUser size={20} className="text-[#90A1B9]" />
            Public Profile
          </h2>

          <div className="flex flex-col gap-6 pt-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <div className="space-y-2">
                <label htmlFor="fullname" className="block text-sm font-medium text-[#314158]"> Full Name </label>
                <input type="text" id="fullname" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-[#314158]"> Email </label>
                <input type="email" id="email" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="johndoe@example.com" />
              </div>

            </div>

            <div className="space-y-2">
              <label htmlFor="position" className="block text-sm font-medium text-[#314158]"> Position </label>
              <input type="text" id="position" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="Frontend Developer" />
            </div>

            <div className="space-y-2">
              <label htmlFor="bio" className="block text-sm font-medium text-[#314158]"> Bio </label>
              <textarea className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" id="bio" placeholder="Write a brief bio..."></textarea>
            </div>

          </div>

        </div>

        <div className="flex gap-3 items-center justify-end">
          <button type="submit" className="bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4] flex items-center gap-2">
            <LuSave />
            Save Changes
          </button>
        </div>

      </form>

      <div className="card w-full md:w-md flex items-center gap-3 border border-slate-200 rounded-md p-6">

        <div className="size-10 bg-[#F1F5F9] text-[#45556C] p-2.5 rounded-md">
          <LuLock size={20} />
        </div>

        <div className="flex justify-between flex-1">

          <div>
            <h3 className="text-[#0F172B] font-medium"> Password </h3>
            <p className="text-sm text-[#62748E]"> Update your account password </p>
          </div>

          <button type="button" onClick={() => setShowModal(prev => !prev)} className="text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
            Change
          </button>

        </div>

      </div>

      {showModal && (
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

            <form className="flex flex-col gap-5 mt-5">

              <div className="space-y-2">
                <label htmlFor="current-password" className="block text-sm font-medium text-[#314158]"> Current Password </label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} id="current-password" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="********" />
                  <button onClick={() => setShowPassword(prev => !prev)} type="button" className="absolute top-1/2 -translate-y-1/2 right-4 text-[#62748E] cursor-pointer"> 
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />} 
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="new-password" className="block text-sm font-medium text-[#314158]"> New Password </label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} id="new-password" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="********" />
                  <button onClick={() => setShowPassword(prev => !prev)} type="button" className="absolute top-1/2 -translate-y-1/2 right-4 text-[#62748E] cursor-pointer"> 
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />} 
                  </button>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <button type="button" onClick={() => setShowModal(prev => !prev)} className="w-full lg:w-1/2 text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
                  Cancel
                </button>
                <button type="submit" className="w-full lg:w-1/2 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
                  Update Password
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </section>
  )
}

export default EmployeeSettingsPage;
