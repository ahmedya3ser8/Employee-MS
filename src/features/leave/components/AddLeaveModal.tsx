import { Input, Select, Textarea } from "@/components";
import useAddLeave from "../hooks/useAddLeave";

import { IoMdClose } from "react-icons/io";
import { LuLoader, LuSend } from "react-icons/lu";

const AddLeaveModal = ({ setShowModal }: { setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { errors, handleSubmit, isCreateLeaveLoading, register, submitForm } = useAddLeave({ setShowModal });

  return (
    <div className="modal fixed z-50 inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">

        <div className="flex justify-between items-center flex-1">
          <div className="space-y-0.5">
            <h3 className="font-medium text-[#0F172B]"> Apply for Leave </h3>
            <p className="text-sm text-slate-400"> Submit your leave request for approval </p>
          </div>
          <button onClick={() => setShowModal(prev => !prev)} className="p-2 transition-all duration-300 hover:bg-slate-100 cursor-pointer">
            <IoMdClose size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5 mt-5">

          <Select 
            id="leaveType"
            label="Leave Type"
            register={register}
            name="type"
            error={errors.type?.message as string}
            options={['sick', 'annual', 'casual']}
          />

          <div className="space-y-2">
            
            <h3 className="text-sm font-medium text-[#314158]"> Duration </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              <Input 
                id="startDate"
                label="From"
                type="date"
                register={register}
                name="startDate"
                error={errors.startDate?.message as string}
              />

              <Input 
                id="endDate"
                label="To"
                type="date"
                register={register}
                name="endDate"
                error={errors.endDate?.message as string}
              />

            </div>

          </div>

          <Textarea 
            id="reason"
            label="Reason"
            register={register}
            name="reason"
            placeholder="Briefly describe why you need this leave..."
            error={errors.reason?.message as string}
          />

          <div className="flex gap-3 items-center">
            <button type="button" onClick={() => setShowModal(prev => !prev)} className="w-full lg:w-1/2 text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
              Cancel
            </button>
            <button type="submit" className="w-full lg:w-1/2 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4] flex items-center justify-center gap-2">
              {isCreateLeaveLoading ? <LuLoader size={16} className='animate-spin mx-auto' /> : <> <LuSend /> Submit </>}
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default AddLeaveModal;
