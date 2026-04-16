import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { LuDownload, LuPlus } from "react-icons/lu";

const payslipsList = [
  { id: 1, employee: 'David Michael', period: 'February 2026', basicSalary: '$2,000', netSalary: '$2,180' },
  { id: 2, employee: 'Alex Matthew', period: 'February 2026', basicSalary: '$2,000', netSalary: '$2,180' },
  { id: 3, employee: 'John Doe', period: 'February 2026', basicSalary: '$1,000', netSalary: '$1,090' },
  { id: 4, employee: 'David Michael', period: 'January 2026', basicSalary: '$2,000', netSalary: '$1,180' },
  { id: 5, employee: 'Alex Matthew', period: 'January 2026', basicSalary: '$2,000', netSalary: '$2,190' },
  { id: 6, employee: 'John Doe', period: 'January 2026', basicSalary: '$2,000', netSalary: '$2,290' },
];

const employeesList = [
  { id: 8, value: 'james-thomas', name: 'James Thomas (Marketing)' },
  { id: 9, value: 'david-mask', name: 'David Mask (Software Developer)' },
  { id: 10, value: 'Alex Michael', name: 'Alex Michael (It Support)' },
];

const AdminPayslipsPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="space-y-8">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div className="space-y-1">
          <h1 className="text-2xl font-medium text-[#0F172B]"> Payslips </h1>
          <p className="text-sm text-[#62748E]"> Generate and manage employee payslips </p>
        </div>

        <button onClick={() => setShowModal(prev => !prev)} className="max-md:w-50 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white flex items-center gap-2 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
          <LuPlus size={16} />
          Generate Payslip
        </button>

      </div>

      <div className="w-full overflow-x-auto border border-slate-200 rounded-md shadow-sm">
        <table className="min-w-5xl w-full ">
          <thead>
            <tr className="border-b border-slate-200 text-[#62748E] bg-slate-50 text-xs uppercase text-left">
              <th className="px-6 py-4"> Employee </th>
              <th className="px-6 py-4"> Period </th>
              <th className="px-6 py-4"> Basic Salary </th>
              <th className="px-6 py-4"> Net Salary </th>
              <th className="px-6 py-4"> Action </th>
            </tr>
          </thead>
          <tbody>
            {payslipsList.map((payslip) => (
              <tr key={payslip.id} className="border-b border-slate-200 text-[#62748E] text-sm transition-all duration-300 hover:bg-slate-50 last:border-none">
                <td className="px-6 py-4"> {payslip.employee} </td>
                <td className="px-6 py-4"> {payslip.period} </td>
                <td className="px-6 py-4"> {payslip.basicSalary} </td>
                <td className="px-6 py-4 text-[#1D293D] font-medium"> {payslip.netSalary} </td>
                <td className="px-6 py-4">
                  <button className="inline-flex items-center gap-1.5 bg-blue-50 py-1.5 px-3 rounded-sm text-[#155DFC] text-xs font-medium transition-all duration-300 hover:bg-blue-100 cursor-pointer"> 
                    <LuDownload />
                    Download 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal fixed z-50 inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-6">

            <div className="flex justify-between items-center flex-1">
              <h3 className="font-medium text-[#0F172B]"> Generate Monthly Payslip </h3>
              <button onClick={() => setShowModal(prev => !prev)} className="p-2 transition-all duration-300 hover:bg-slate-100 cursor-pointer">
                <IoMdClose size={20} />
              </button>
            </div>

            <form className="flex flex-col gap-5 mt-5">

              <div className="space-y-2">
                <label htmlFor="employee" className="block text-sm font-medium text-[#314158]"> Employee </label>
                <select id="employee" className="w-full bg-[#f8fafc80] border border-[#E2E8F0] rounded-md outline-none p-3">
                  {employeesList.map((employee) => (
                    <option key={employee.id} value={employee.value}> {employee.name} </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                <div className="space-y-2">
                  <label htmlFor="month" className="block text-sm font-medium text-[#314158]"> Month </label>
                  <select id="month" className="w-full bg-[#f8fafc80] border border-[#E2E8F0] rounded-md outline-none p-3">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <option key={index} value={index + 1}> {index + 1} </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="year" className="block text-sm font-medium text-[#314158]"> Year </label>
                  <input type="number" id="year" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="0" />
                </div>

              </div>

              <div className="space-y-2">
                <label htmlFor="basic-salary" className="block text-sm font-medium text-[#314158]"> Basic Salary </label>
                <input type="number" id="basic-salary" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="5000" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                <div className="space-y-2">
                  <label htmlFor="allowances" className="block text-sm font-medium text-[#314158]"> Allowances </label>
                  <input type="number" id="allowances" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="0" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="deductions" className="block text-sm font-medium text-[#314158]"> Deductions </label>
                  <input type="number" id="deductions" className="w-full bg-[#F8FAFC80] border border-[#E2E8F0] rounded-md py-3 px-4" placeholder="0" />
                </div>

              </div>

              <div className="flex gap-3 items-center">
                <button type="button" onClick={() => setShowModal(prev => !prev)} className="w-full lg:w-1/2 text-slate-700 border border-slate-200 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-50">
                  Cancel
                </button>
                <button type="submit" className="w-full lg:w-1/2 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#3d28de] hover:to-[#5957e4]">
                  Generate
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </section>
  )
}

export default AdminPayslipsPage;
