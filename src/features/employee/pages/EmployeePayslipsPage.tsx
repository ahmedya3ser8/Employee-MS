import { LuDownload } from "react-icons/lu";

const payslipsList = [
  { id: 1, period: 'February 2026', basicSalary: '$2,000', netSalary: '$2,180' },
  { id: 2, period: 'February 2026', basicSalary: '$2,000', netSalary: '$2,180' },
  { id: 3, period: 'February 2026', basicSalary: '$1,000', netSalary: '$1,090' },
];

const EmployeePayslipsPage = () => {
  return (
    <section className="space-y-8">

      <div className="space-y-1">
        <h1 className="text-2xl font-medium text-[#0F172B]"> Payslips </h1>
        <p className="text-sm text-[#62748E]"> Your payslip history </p>
      </div>

      <div className="w-full overflow-x-auto border border-slate-200 rounded-md shadow-sm">
        <table className="min-w-5xl w-full">
          <thead>
            <tr className="border-b border-slate-200 text-[#62748E] bg-slate-50 text-xs uppercase text-left">
              <th className="px-6 py-4"> Period </th>
              <th className="px-6 py-4"> Basic Salary </th>
              <th className="px-6 py-4"> Net Salary </th>
              <th className="px-6 py-4"> Action </th>
            </tr>
          </thead>
          <tbody>
            {payslipsList.map((payslip) => (
              <tr key={payslip.id} className="border-b border-slate-200 text-[#62748E] text-sm transition-all duration-300 hover:bg-slate-50 last:border-none">
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

export default EmployeePayslipsPage;
