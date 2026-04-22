import type { PayslipDetailsTableProps } from "../types/payslip.types";

const PayslipDetailsTable = ({ allowances, basicSalary, deductions, netSalary }: PayslipDetailsTableProps) => {
  return (
    <div className="w-full overflow-x-auto border border-slate-200 rounded-md shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 text-[#62748E] bg-slate-50 text-xs uppercase">
            <th className="p-3 text-left"> Description </th>        
            <th className="p-3 text-right"> Amount </th>        
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-200 text-[#62748E] text-sm transition-all duration-300 hover:bg-slate-50 last:border-none">
            <td className="p-3 text-slate-700 capitalize"> Basic Salary </td>
            <td className="p-3 text-slate-900 capitalize font-medium text-right"> ${basicSalary} </td>
          </tr>
          <tr className="border-b border-slate-200 text-[#62748E] text-sm transition-all duration-300 hover:bg-slate-50 last:border-none">
            <td className="p-3 text-slate-700 capitalize"> Allowances </td>
            <td className="p-3 text-slate-900 capitalize font-medium text-right"> +${allowances} </td>
          </tr>
          <tr className="text-[#62748E] text-sm transition-all duration-300 hover:bg-slate-50 last:border-none">
            <td className="p-3 text-slate-700 capitalize"> Deductions </td>
            <td className="p-3 text-slate-900 capitalize font-medium text-right"> -${deductions} </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="text-[#62748E] bg-slate-100 text-sm">
            <th className="p-3 text-left text-slate-900 font-bold"> Net Salary </th>        
            <th className="p-3 text-right text-base text-slate-900 font-bold"> ${netSalary} </th>        
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default PayslipDetailsTable;
