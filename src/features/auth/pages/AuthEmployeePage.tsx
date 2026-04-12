import { useState } from "react";
import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AuthEmployeePage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-10 justify-center h-full w-full max-w-md mx-auto max-sm:p-6">
      <Link to='/auth/login' className="text-[#90A1B9] flex items-center gap-2 transition-all duration-300 hover:text-slate-700">
        <FaArrowLeft size={16} />
        <p> Back to portals </p>
      </Link>
      <div className="space-y-2">
        <h3 className="text-[#27272A] font-medium text-3xl"> Employee Portal </h3>
        <p className="text-[#62748E]"> Sign in to access your account </p>
      </div>
      <form className="flex flex-col gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-[#314158]"> Email address </label>
          <input type="email" id="email" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-[#314158]"> Password </label>
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} id="password" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="********" />
            <button onClick={() => setShowPassword(prev => !prev)} type="button" className="absolute top-1/2 -translate-y-1/2 right-4 text-[#62748E] cursor-pointer"> 
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />} 
            </button>
          </div>
        </div>
        <button className="bg-linear-to-r from-[#4F39F6] to-[#615FFF] p-3 rounded-md text-white cursor-pointer">
          Sign in
        </button>
      </form>
    </div>
  )
}

export default AuthEmployeePage;
