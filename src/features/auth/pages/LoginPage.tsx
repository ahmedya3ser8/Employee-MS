import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-10 justify-center h-full w-full max-w-md mx-auto max-sm:p-6">
      <div className="space-y-2">
        <h2 className="text-[#0F172B] font-medium text-3xl -tracking-wider"> Welcome Back </h2>
        <p className="text-[#62748E]">
          Select your portal to securely access the system.
        </p>
      </div>
      <div className="space-y-4">
        <Link to='/auth/login/admin' className="bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center w-full p-6 transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-400 cursor-pointer group"> 
          <h3 className="text-[#1D293D] text-lg"> Admin Portal </h3>
          <FaArrowRight size={16} className="text-[#90A1B9] transition-all duration-300 group-hover:translate-x-2" />
        </Link>
        <Link to='/auth/login/employee' className="bg-slate-50 border border-slate-200 rounded-lg flex justify-between items-center w-full p-6 transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-400 cursor-pointer group"> 
          <h3 className="text-[#1D293D] text-lg"> Employee Portal  </h3>
          <FaArrowRight size={16} className="text-[#90A1B9] transition-all duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
      <p className="text-sm text-[#90A1B9]"> 
        &copy; {new Date().getFullYear()} Ahmed Yasser. All rights reserved. 
      </p>
    </div>
  )
}

export default LoginPage;
