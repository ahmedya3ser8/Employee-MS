import { LuLoader, LuLogIn } from "react-icons/lu";

type AttendanceButtonProps = {
  clockInOut: () => void;
  isCreateAttendanceLoading: boolean;
}

const AttendanceButton = ({ clockInOut, isCreateAttendanceLoading }: AttendanceButtonProps) => {
  return (
    <div onClick={() => clockInOut()} className="absolute bottom-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white flex items-center gap-4 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
      {isCreateAttendanceLoading ? <LuLoader size={28} className='animate-spin mx-auto' /> : <LuLogIn size={28} />}
      <div className="text-center">
        <h3 className="text-lg font-medium"> Clock In </h3>
        <p className="text-xs"> start your work day </p>
      </div>
    </div>
  )
}

export default AttendanceButton;
