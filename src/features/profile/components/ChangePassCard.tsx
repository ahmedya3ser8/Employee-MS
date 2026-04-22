import { LuLock } from "react-icons/lu";

type ChangePassCardProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePassCard = () => {
  return (
    <div className="w-full md:w-md flex items-center gap-3 border border-slate-200 rounded-md p-6">
    
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
  )
}

export default ChangePassCard;
