import { Link } from "react-router-dom";

import { LuDownload, LuPlus } from "react-icons/lu";

const payslipsList = [
  { id: 1, employee: 'David Michael', period: 'February 2026', basicSalary: '$2,000', netSalary: '$2,180' },
  { id: 2, employee: 'Alex Matthew', period: 'February 2026', basicSalary: '$2,000', netSalary: '$2,180' },
  { id: 3, employee: 'John Doe', period: 'February 2026', basicSalary: '$1,000', netSalary: '$1,090' },
  { id: 4, employee: 'David Michael', period: 'January 2026', basicSalary: '$2,000', netSalary: '$1,180' },
  { id: 5, employee: 'Alex Matthew', period: 'January 2026', basicSalary: '$2,000', netSalary: '$2,190' },
  { id: 6, employee: 'John Doe', period: 'January 2026', basicSalary: '$2,000', netSalary: '$2,290' },
];

const AdminPayslipsPage = () => {
  return (
    <section className="space-y-8">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div className="space-y-1">
          <h1 className="text-2xl font-medium text-[#0F172B]"> Payslips </h1>
          <p className="text-sm text-[#62748E]"> Generate and manage employee payslips </p>
        </div>

        <Link to='/admin/payslips/add' className="max-md:w-50 bg-linear-to-r from-[#4F39F6] to-[#615FFF] text-white flex items-center gap-2 py-2.5 px-5 rounded-md cursor-pointer transition-all duration-300 hover:from-[#462ff0] hover:to-[#6765f3]">
          <LuPlus size={16} />
          Generate Payslip
        </Link>

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

    </section>
  )
}

export default AdminPayslipsPage;
