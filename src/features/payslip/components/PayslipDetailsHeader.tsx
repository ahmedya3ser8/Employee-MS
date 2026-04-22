import { formatMonthYear } from "@/utils/formateDate";
import type { PayslipDetailsHeaderProps } from "../types/payslip.types";

const PayslipDetailsHeader = ({ month, year }: PayslipDetailsHeaderProps) => {
  return (
    <div className="space-y-1 text-center border-b border-slate-200 pb-5">
      <h1 className="text-2xl font-bold text-slate-900 tracking-tight uppercase"> PAYSLIP </h1>
      <p className="text-sm text-slate-500">
        {formatMonthYear(month, year)}
      </p>
    </div>
  )
}

export default PayslipDetailsHeader;
