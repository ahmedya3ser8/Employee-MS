import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

type LoginHeaderProps = {
  backTo?: string;
  title: string;
  description: string;
}

const LoginHeader = ({ backTo = '/auth/login', title, description }: LoginHeaderProps) => {
  return (
    <>
      <Link to={backTo} className="text-[#90A1B9] flex items-center gap-2 transition-all duration-300 hover:text-slate-700">
        <FaArrowLeft size={16} />
        <p> Back to portals </p>
      </Link>
      
      <div className="space-y-2">
        <h3 className="text-[#27272A] font-medium text-3xl">  
          {title}
        </h3>
        <p className="text-[#62748E]"> 
          {description}
        </p>
      </div>
    </>
  )
}

export default LoginHeader;
