import { IoMdClose } from "react-icons/io";
import { LuCheck, LuLoader } from "react-icons/lu";

import type { LeaveActionsProps } from "../types/leave.types";

const LeaveActions = ({ handleUpdateLeave, id, status, loadingLeaveId, type }: LeaveActionsProps) => {
  if (status !== 'pending') return null;

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => handleUpdateLeave(id, 'approved')} 
        className="bg-[#ECFDF5] text-[#009966] p-1.5 rounded-md cursor-pointer shadow-sm"
      > 
        {loadingLeaveId === id && type === 'approved' ? <LuLoader size={16} className='animate-spin' /> : <LuCheck size={16} /> }
      </button>
      <button 
        onClick={() => handleUpdateLeave(id, 'rejected')} 
        className="bg-[#FFF1F2] text-[#EC003F] p-1.5 rounded-md cursor-pointer shadow-sm"
      > 
        {loadingLeaveId === id && type === 'rejected' ? <LuLoader size={16} className='animate-spin' /> : <IoMdClose size={16} /> }
      </button>
    </div>
  )
}

export default LeaveActions;
