import { IoMdClose } from "react-icons/io";
import { LuLoader } from "react-icons/lu";

import { Input, Select } from '@/components';
import useAddPayslip from "../hooks/useAddPayslip";

const monthList: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
const yearList: number[] = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);

const AddPayslipModal = ({ setShowModal }: { setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { employeeList, errors, isCreatePayslipLoading, register, handleSubmit, submitForm } = useAddPayslip({ setShowModal });

  return (
    <div className="modal fixed z-50 inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-6">

        <div className="flex justify-between items-center flex-1">
          <h3 className="font-medium text-[#0F172B]"> Generate Monthly Payslip </h3>
          <button onClick={() => setShowModal(prev => !prev)} className="p-2 transition-all duration-300 hover:bg-slate-100 cursor-pointer">
            <IoMdClose size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5 mt-5">

          <div className="space-y-2">
            <label htmlFor="employee" className="block text-sm font-medium text-[#314158]"> Employee </label>
            <select {...register('employee')} id="employee" className="w-full bg-[#f8fafc80] border border-[#E2E8F0] rounded-md outline-none p-3">
              {employeeList.map((employee) => (
                <option key={employee._id} value={employee._id}> 
                  {employee.firstName} {employee.lastName} ({employee.position}) 
                </option>
              ))}
              { errors.employee?.message && <p className="text-rose-500 text-sm lowercase"> {errors.employee?.message} </p> }
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            <Select 
              id="month"
              label="Month"
              type="number"
              register={register}
              name="month"
              error={errors.month?.message as string}
              options={monthList}
            />

            <Select 
              id="year"
              label="Year"
              type="number"
              register={register}
              name="year"
              error={errors.year?.message as string}
              options={yearList}
            />

          </div>

          <Input 
            id="basicSalary"
            label="Basic Salary"
            type="number"
            register={register}
            name="basicSalary"
            placeholder="5000"
            error={errors.basicSalary?.message as string}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            <Input 
              id="allowances"
              label="Allowances"
              type="number"
              register={register}
              name="allowances"
              placeholder="0"
              error={errors.allowances?.message as string}
            />

            <Input 
              id="deductions"
              label="Deductions"
              type="number"
              register={register}
              name="deductions"
              placeholder="0"
              error={errors.deductions?.message as string}
            />

          </div>

          <div className="flex gap-3 items-center">
            <button type="button" onClick={() => setShowModal(prev => !prev)} className="w-full lg:w-1/2 text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
              Cancel
            </button>
            <button type="submit" className="w-full lg:w-1/2 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
              {isCreatePayslipLoading ? <LuLoader size={22} className='animate-spin mx-auto' /> : 'Generate'}
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default AddPayslipModal;
