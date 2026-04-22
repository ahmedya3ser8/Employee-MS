import { formatMonthYear } from "@/utils/formateDate";
import type { PayslipDetailsInfoProps } from "../types/payslip.types";

const PayslipDetailsInfo = ({ firstName, lastName, month, year, email, position }: PayslipDetailsInfoProps) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="space-y-1">
        <h3 className="text-sm text-slate-400 uppercase tracking-wider"> Employee Name </h3>
        <p className="text-slate-900 font-semibold capitalize"> {firstName} {lastName} </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm text-slate-400 uppercase tracking-wider"> Position </h3>
        <p className="text-slate-900 font-semibold capitalize"> {position} </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm text-slate-400 uppercase tracking-wider"> Email </h3>
        <p className="text-slate-900 font-semibold"> {email} </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm text-slate-400 uppercase tracking-wider"> Period </h3>
        <p className="text-slate-900 font-semibold"> 
          {formatMonthYear(month, year)}
        </p>
      </div>
    </div>
  )
}

export default PayslipDetailsInfo;
